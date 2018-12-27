import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ReviewSchema = new Schema({
    title: {
        type: String
    },
    emoji: {
        type: String
    },
    description: {
        type: String
    },
    tag: {
        type: String
    }
});
