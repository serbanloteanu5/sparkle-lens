// Filename: sophisticated_code.js
// Description: This code showcases a complex implementation of a web-based chat application
// with various features such as user authentication, real-time messaging, and message history retrieval.

// Import required libraries and modules
import express from 'express';
import socketio from 'socket.io';
import mongoose from 'mongoose';

// Initialize Express application
const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/chat', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false
}).then(() => {
   console.log('Connected to MongoDB');
}).catch((error) => {
   console.error('Error connecting to MongoDB:', error.message);
   process.exit(1);
});

// Define User Schema
const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 20
   },
   password: {
      type: String,
      required: true,
      minlength: 6
   }
});

// Define Message Schema
const messageSchema = new mongoose.Schema({
   content: {
      type: String,
      required: true
   },
   sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
   receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
});

// Create User model
const User = mongoose.model('User', userSchema);

// Create Message model
const Message = mongoose.model('Message', messageSchema);

// Configure Express middleware
app.use(express.json());

// Define routes for user registration, login, and message retrieval
app.post('/api/register', async (req, res) => {
   try {
      const { username, password } = req.body;
      const newUser = new User({ username, password });
      await newUser.save();
      res.status(200).json(newUser);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

app.post('/api/login', async (req, res) => {
   try {
      const { username, password } = req.body;
      const user = await User.findOne({ username, password });
      if (user) {
         res.status(200).json(user);
      } else {
         res.status(404).json({ message: 'Invalid credentials' });
      }
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

app.get('/api/messages/:sender/:receiver', async (req, res) => {
   try {
      const { sender, receiver } = req.params;
      const messages = await Message.find({
         $or: [
            { sender, receiver },
            { sender: receiver, receiver: sender }
         ]
      }).populate('sender', 'username').populate('receiver', 'username');
      res.status(200).json(messages);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

// Start server and initialize Socket.IO
const server = app.listen(3000, () => {
   console.log('Server started on http://localhost:3000');
});

const io = socketio(server);

// Define event listeners for Socket.IO
io.on('connection', (socket) => {
   console.log('New client connected:', socket.id);

   socket.on('authenticate', async (data) => {
      try {
         const { username, password } = data;
         const user = await User.findOne({ username, password });
         if (user) {
            socket.userId = user._id;
            socket.emit('authenticated');
            console.log('User authenticated:', user.username);
         } else {
            socket.emit('unauthorized');
            console.log('Unauthorized access attempt');
         }
      } catch (error) {
         socket.emit('unauthorized');
         console.error('Error authenticating user:', error.message);
      }
   });

   socket.on('chatMessage', async (data) => {
      try {
         const { content, receiver } = data;
         const message = new Message({
            content,
            sender: socket.userId,
            receiver
         });
         await message.save();
         io.emit('message', message);
      } catch (error) {
         console.error('Error sending message:', error.message);
      }
   });

   socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
   });
});

// Export Express app for testing
export default app;