import { GraphQLString, GraphQLInt } from 'graphql';
import { UserType } from '../TypeDefs/Users';
import { Users } from '../../Entities/Users';


export const CREATE_USERS = {
    type: UserType,
    args:{
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        address: {type: GraphQLString},
        phone: {type: GraphQLInt},
    },
    async resolve(parent: any, args: any) {
        const {name, email, password, address, phone} = args;
        await Users.insert({
            name,
            email,
            password,
            address,
            phone
        });
        return args;
    }
}