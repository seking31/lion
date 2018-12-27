import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EventSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: Number
    },
    start_date: {
        type: String
    },
    end_date: {
        type: Number
    },
    location: {
        type: String
    },
    description: {
       type: Date
    },
    price: {
       type: String
    },
    count: {
        type: String
    },
    link: {
        type: string
    },
    tag: {
        type: String
    }
});
