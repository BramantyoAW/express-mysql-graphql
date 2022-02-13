import { GraphQLObjectType, GraphQLSchema} from "graphql";
import { GET_ALL_USERS } from './Queries/Users';
import { CREATE_USERS } from './Mutations/Users';

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS,
    },
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createNewUsers: CREATE_USERS,
    },
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})