import mongoose from 'mongoose';
import { InventorySchema } from '../models/inventoryModel';

const Inventory = mongoose.model('Inventory', InventorySchema);

export const addNewInventory = (req, res) => {
    let newInventory = new Inventory(req.body);

    newInventory.save((err, inventory) => {
        if (err) {
            res.send(err);
        }
        res.json(inventory);
    });
};

export const getInventory = (req, res) => {
    Inventory.find({}, (err, inventory) => {
        if (err) {
            res.send(err);
        }
        res.json(inventory);
    });
};

export const getInventoryWithID = (req, res) => {
    Inventory.findById(req.params.inventoryId, (err, inventory) => {
        if (err) {
            res.send(err);
        }
        res.json(inventory);
    });
}

export const updateInventory = (req, res) => {
    Inventory.findOneAndUpdate({ _id: req.params.inventoryId}, req.body, { new: true }, (err, inventory) => {
        if (err) {
            res.send(err);
        }
        res.json(inventory);
    })
}

export const deleteInventory = (req, res) => {
    Inventory.remove({ _id: req.params.inventoryId }, (err, inventory) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted inventory'});
    })
}