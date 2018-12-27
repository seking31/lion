import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const InventorySchema = new Schema({
    id: {
        type: Number
    },
    price: {
        type: Number
    },
    name: {
        type: String
    },
    count: {
        type: Number
    },
    description: {
        type: String
    },
    date_issued: {
       type: Date
    },
    color: {
       type: String
    },
    size: {
        type: String
    },
    tag: {
        type: String
    }
});
