import mongoose from 'mongoose';
import { ReviewSchema } from '../models/reviewModel';

const Review = mongoose.model('Review', ReviewSchema);

export const addNewReview = (req, res) => {
    let newReview = new Review(req.body);

    newReview.save((err, review) => {
        if (err) {
            res.send(err);
        }
        res.json(review);
    });
};

export const getReviews = (req, res) => {
    Review.find({}, (err, review) => {
        if (err) {
            res.send(err);
        }
        res.json(review);
    });
};

export const getReviewWithID = (req, res) => {
    Review.findById(req.params.reviewId, (err, review) => {
        if (err) {
            res.send(err);
        }
        res.json(review);
    });
}

export const updateReview = (req, res) => {
    Review.findOneAndUpdate({ _id: req.params.reviewId}, req.body, { new: true }, (err, review) => {
        if (err) {
            res.send(err);
        }
        res.json(review);
    })
}

export const deleteReview = (req, res) => {
    Review.remove({ _id: req.params.reviewId }, (err, review) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted review'});
    })
}