require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const authRoutes=require('./routes/authRoutes');
const trackRoutes=require('./routes/trackRoutes');
const requireAuth=require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://user:useruser@cluster0.f6zyc.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
});

mongoose.connection.on ( 'connected', () => {
    console.log('konektovan'); 
});


mongoose.connection.on('error', (err) => {
    console.error('greska',err);
});
 
app.get('/',requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3002, () => {

    console.log('test');
});

// kada god neko geta na root rutu pokrenut ce se ova funkcija (express)