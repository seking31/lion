import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EventSchema = new Schema({
    name: {
        type: String
    },
    start_date: {
        type: Date
    },
    end_date: {
        type: Date
    },
    location: {
        type: String
    },
    description: {
       type: String
    },
    price: {
       type: Number
    },
    count: {
        type: Number
    },
    link: {
        type: String
    },
    tag: {
        type: String
    }
});
