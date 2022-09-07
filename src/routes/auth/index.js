const MainAuthRouter = require('express').Router();

MainAuthRouter.route('/register')
    .get((req, res) => {
        res.send('Main Auth Router Register')
    })
    .post((req, res) => {
        res.send('Post Main Auth Router')
    })



module.exports = MainAuthRouter
