const { GraphQLString } = require('graphql');
const { User } = require('../models');
const { createJwtToken } = require('../util/auth')

const register = {
    type: GraphQLString,
    description: "Register a new user",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent, args){
        // check to see if you already have a user with that email: (ps. you can find all these methods in the mongoose documentation)
        const checkUser = await User.findOne({ email: args.email })
        // if checkUser returns a user:
        if (checkUser){
            throw new Error("User with this email address already exists")
        }
        // else:
        const { username, email, password } = args;
        const user = new User({ username, email, password })

        // save user in the database
        await user.save();

        const token = createJwtToken(user)

        return token
    }
}

module.exports = { register }
// after you create this mutation you want to connect it to a schema