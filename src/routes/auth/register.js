const axios = require('axios');


module.exports = async (req, res) => {
    if (req.body.password !== req.body.confirmPass){
        res.send({error: "Your passwords do not match"})
        return
    }
    try{
        const mutation = `
        mutation register($email: String! $username: String!, $password: String!){
            register( email: $email, username: $username, password: $password)
        }
        `
        const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT,
            {
                query: mutation,
                variables: {
                    email: req.body.email,
                    username: req.body.username, 
                    password: req.body.password,
                }
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );

        const jwtToken = data.data.register
        console.log(jwtToken)

        // similar to local storage. httpOnly means its only accessible by the web browser
        res.cookie('jwtToken', jwtToken, { maxAge: 900000, httpOnly: true })

        res.redirect('/')

        // first we tried the above. If it fails it will run the catch
    } catch(e) {
        console.log(e);
        res.redirect('/auth/register')

    }



    // const { username, email, password } = req.body
    // const user = new User({ username, email, password })
    // // each document can be saved to the database by calling the save method on it. The first ag to the callback will be an error in any occurred
    // user.save();
    // res.send(`New User Created - ${user.username}`)
}