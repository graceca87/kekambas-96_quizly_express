const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const { connectDB } = require('./src/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema');
const cookieParser = require('cookie-parser')

dotenv.config();
const app = express();
// call the function that connects to our mongodatabase
connectDB();

// we installed cookie parser (npm i cookie-parser) so now we can call the function below
app.use(cookieParser())

// app.use function takes in the files we created in graphqlfolder, and sets up the http so we can see graphiql on local host (localhost:3000/graphql)
// we're makign a post request to localhost:3000/graphql. What we are getting back is response of data. Data is our users list
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.get('/', (req, res) => {
    res.send('Hello World')
});

// Before we initialize routes set up our settings:
// Set the view engine to ejs (don't forget to npm install ejs)
app.set('view engine', 'ejs')
// Update the location of the views folder that res.render uses
app.set('views', path.join(__dirname, 'src/templates/views'))

// Need this middleware so that form data is added to request
app.use(express.urlencoded({ extended: true }))

// Initialize routes: Create function initRoutes that brings in routes from our src files
// initRoutes is equal to the exports of the routes modules
const initRoutes = require('./src/routes');
// call the initRoutes function. Takes in app. Looks at path above ('./src/routes')
initRoutes(app);


app.listen(process.env.PORT, () => {
    console.log(`Server is now running on port ${process.env.PORT}`)
})
