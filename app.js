// Load modules
const express = require('express');
const exphbs = require('express-handlebars');
const keys = require('./config/keys');
const mongoose = require('mongoose');

// Init app
const app = express();

// Setup handlebars as a view
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// Setup express static folder
app.use(express.static('public'));

// Connect to DB
mongoose.connect(keys.MongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> {
    console.log("Connected to remote DB.")
}).catch((err)=> {
    console.log("Error when connecting to remote DB");
    console.log(err);
});

// Setup application port
const port = process.env.PORT || 3000;

// Render Home page
app.get('/', (req, res) => {
    res.render('home');
})

// Render About page
app.get('/about', (req, res) => {
res.render('about');
})

// Listen on port
app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
} );