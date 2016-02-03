var eventsRouter = require('express').Router();
var eventsData = require('../data/events-data');
var _ = require('lodash');

var events = eventsData;
var id = 12;

var updateId = function (req, res, next) {
    console.log(req.body);
    if (!req.body.id) {
        id++;
        req.body.id = id + '';
    }
    next();
};

eventsRouter.param('id', function (req, res, next, id) {
    var event = _.find(events, {id: id});
    if (event) {
        req.event = event;
        next();
    } else {
        res.json({"error": "Id not found"});
    }
});

eventsRouter.get('/', function (req, res) {
    res.json(events);
});

eventsRouter.get('/:id', function (req, res) {
    var event = req.event;
    res.json(event || {});
});

eventsRouter.post('/', updateId, function (req, res) {
    var event = req.body;

    events.push(event);
    res.status(201).json(event || {});
});

eventsRouter.put('/:id', function (req, res) {
    var update = req.body;

    if (update.id) {
        delete update.id;
    }

    var event = _.findIndex(events, {id: req.params.id});

    if (!events[event]) {
        res.send();
    } else {
        var updatedEvent = _.assign(events[event], update);
        res.json(updatedEvent);
    }
});

eventsRouter.delete('/:id', function (req, res) {
    var event = _.findIndex(events, {id: req.params.id});
    events.splice(event, 1);

    res.json(req.event);
});

// Error handler
eventsRouter.use(function (err, req, res, next) {

    if (err) {
        res.status(500).send(err);
    }

});

module.exports = eventsRouter;