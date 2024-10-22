const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/truckport', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  userId: String,
  password: String,
  name: String,
  email: String,
  phone: String,
});

const User = mongoose.model('User', UserSchema);

app.post('/api/bookings', async (req, res) => {
  const userId = uuidv4();
  res.json({ userId });
});

app.post('/api/users', async (req, res) => {
  const { userId, password, name, email, phone } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newUser = new User({
    userId,
    password: hashedPassword,
    name,
    email,
    phone,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

app.post('/api/login', async (req, res) => {
  const { userId, password } = req.body;
  const user = await User.findOne({ userId });

  if (user && await bcrypt.compare(password, user.password)) {
    res.json({ userId: user.userId });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/api/users/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = await User.findOne({ userId });

  if (user) {
    const { password, ...userWithoutPassword } = user.toObject();
    res.json(userWithoutPassword);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));