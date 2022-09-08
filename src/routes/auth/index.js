const MainAuthRouter = require('express').Router();

// You can put all of your methods under a single .route like this: (instead of separating them)
MainAuthRouter.route('/register')
    // .get - this tells it to look in the register.view.js file for the logic on the get request
    .get(require('./register.view'))
    // .post - looks in the register.js file for the logic on this post request
    .post(require('./register'))


MainAuthRouter.route('/login')
    .get(require('./login.view'))


// this makes it so we can put require('Express').Router() into other files and (ultimately goes back to run the the Express function) Makes it a part of the app. 
module.exports = MainAuthRouter
