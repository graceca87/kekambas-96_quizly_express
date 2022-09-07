const MainAuthRouter = require('express').Router();

MainAuthRouter.route('/register')
    .get(require('./register.view'))
    .post((req, res) => {
        res.send('Post Main Auth Router')
    })


MainAuthRouter.route('/login')
    .get(require('./login.view'))



module.exports = MainAuthRouter
