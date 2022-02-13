import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql"; //declarasi the type datas


export const UserType = new GraphQLObjectType({
    name: "users",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        address: {type: GraphQLString},
        phone: {type: GraphQLInt},
    }),
});