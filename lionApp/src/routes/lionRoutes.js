import { 
    addNewInventory, 
    getInventory, 
    getInventoryWithID, 
    updateInventory,
    deleteInventory 
} from '../controllers/inventoryController';

import { 
    addNewEvent, 
    getEvents, 
    getEventWithID, 
    updateEvent,
    deleteEvent 
} from '../controllers/eventController';

import { 
    addNewReview, 
    getReviews, 
    getReviewWithID, 
    updateReview,
    deleteReview 
} from '../controllers/reviewController';

//inventory

const routes = (app) => {
    app.route('/inventory')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getInventory)
    
    // POST endpoint
    .post(addNewInventory);

    app.route('/inventory/:inventoryId')
    // get specific contact
    .get(getInventoryWithID)
    
    // put request
    .put(updateInventory)

    // delete request
    .delete(deleteInventory);

//events
    app.route('/events')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getEvents)
    
    // POST endpoint
    .post(addNewEvent);

    app.route('/events/:eventId')
    // get specific contact
    .get(getEventWithID)
    
    // put request
    .put(updateEvent)

    // delete request
    .delete(deleteEvent);

//reviews

    app.route('/reviews')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getReviews)
    
    // POST endpoint
    .post(addNewReview);

    app.route('/reviews/:reviewId')
    // get specific contact
    .get(getReviewWithID)
    
    // put request
    .put(updateReview)

    // delete request
    .delete(deleteReview);
}

export default routes;
