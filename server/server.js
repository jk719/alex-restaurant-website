const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'client' directory
app.use(express.static('../client'));

app.get('/', (req, res) => {
    res.send('Hello from Alex\'s Chinese Takeout server!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
