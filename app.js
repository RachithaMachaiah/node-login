const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('login');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Add your authentication logic here
    // For simplicity, we'll just check if the username and password match a hardcoded value
    if (username === 'admin' && password === 'password=@#$%^^&&set') {
        res.send('Login was successful');
    } else {
        res.send('Login failed');
    }
});


