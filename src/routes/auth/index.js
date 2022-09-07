const MainAuthRouter = require('express').Router();

MainAuthRouter.route('/register')
    .get((req, res) => {
        res.render('register')
    })
    .post((req, res) => {
        res.send('Post Main Auth Router')
    })


MainAuthRouter.route('/login')
    .get((req, res) => {
        res.render('login')
    })



module.exports = MainAuthRouter
