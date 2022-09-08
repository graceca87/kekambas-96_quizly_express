// import Types from GraphQL
const { GraphQLList, GraphQLID } = require('graphql')
// import our own created Usertype from types.js
const { UserType } = require('./types')
// import model so we can get data from MongoDB
const { User } = require('../models');

// function that will return all users when we query with "users"
const users = {
    type: new GraphQLList(UserType),
    description: "Query all users in the database",
    // be sure to import User model above so you can return User below
    resolve(parent, args){
        return User.find()
    }
}

const user = {
    type: UserType,
    description: "Query user by id",
    args: {
        id: { type: GraphQLID } 
    },
    resolve(parents, args){
        return User.findById(args.id)
    }
}

module.exports = {
    users,
    user
}