const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World')
});


// Initialize routes
const initRoutes = require('./src/routes');
initRoutes(app);


app.listen(port, () => {
    console.log(`Server is now running on port ${port}`)
})
