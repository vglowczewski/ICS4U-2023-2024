const mongoose = require('mongoose');

const connectionString = `mongodb+srv://vanvalglow:<homecheck>@cluster0.wnqqa4d.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database connected')).catch((err) => console.log(err));
