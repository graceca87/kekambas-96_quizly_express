// import built-in graphql type
const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

// const {} = require('../models');

const UserType = new GraphQLObjectType(
    {
        name: 'User',
        description: 'User Type',
        // putting all the content from the fields object into parens like below is an arrow function thing.
        // if your function is returning an object then you want to put everything in the brackets inside parens
        fields: () => ({
            id: { type: GraphQLID },
            username: { type: GraphQLString },
            email: { type: GraphQLString }
        })
    }
)

module.exports = {
    UserType
}