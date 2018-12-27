import mongoose from 'mongoose';
import { EventSchema } from '../models/eventModel';

const Event = mongoose.model('Event', EventSchema);

export const addNewEvent = (req, res) => {
    let newEvent = new Event(req.body);

    newEvent.save((err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};

export const getEvents = (req, res) => {
    Event.find({}, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};

export const getEventWithID = (req, res) => {
    Event.findById(req.params.eventId, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
}

export const updateEvent = (req, res) => {
    Event.findOneAndUpdate({ _id: req.params.eventId}, req.body, { new: true }, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    })
}

export const deleteEvent = (req, res) => {
    Event.remove({ _id: req.params.eventId }, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted event'});
    })
}