const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.get('/', (req, res) => {
    res.send('Hello World')
});

// Set the view engine to ejs
app.set('view engine', 'ejs')
// Update the location of the views folder that res.render uses
app.set('views', path.join(__dirname, 'src/templates/views'))

// Initialize routes
const initRoutes = require('./src/routes');
initRoutes(app);


app.listen(port, () => {
    console.log(`Server is now running on port ${port}`)
})
