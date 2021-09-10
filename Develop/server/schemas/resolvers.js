const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = { 
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { userId}) => {
            return User.findOne({_id: userId });  
        },
    
    },

Mutation: {
    addUser: async (parent, {username,email, password}) => {
        const user = await User.create ({name, email, password});
        const token =signToken(user);

        return {token, user };
    },
    login: async(parent, {email, password}) => {
        const user = await User.findOne({email});

        if (!user) {
            throw new AuthenticationError("No user with this email found");

        }

    const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw new AuthenticationError('Incorrect password');
        }

        const token =signToken(user);
        return { token, user};
    },
        saveBook: async (parent, { bookId, book}) => {
            return User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedBooks: body } },
                { new: true, runValidators: true } 
                );

        },

        removeBook: async (parent, { bookId})=> {
            return User.findOneAndDelete(
                { _id: user._id },
                { $pull: { savedBooks: { bookId: params.bookId } } },
                { new: true }  

            );
        },
    },
};


module.exports =resolvers;
