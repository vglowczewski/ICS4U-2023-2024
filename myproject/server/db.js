const mongoose = require('mongoose');
// Load environment variables from .env file
require('dotenv').config();

const connectionString = `mongodb+srv://vanvalglow:<homecheck>@cluster0.wnqqa4d.mongodb.net/?retryWrites=true&w=majority`;

// Connect to MongoDB using the URI from the environment variable
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database connected'))
.catch((err) => console.error('Database connection error:', err));