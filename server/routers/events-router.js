var eventsRouter = require('express').Router();
var eventsData = require('../data/events-data');

var events = eventsData;
var id = 0;

var updateId = function (req, res, next) {
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
        res.send();
    }
});

eventsRouter.get('/', function(req, res){
    console.log(eventsData);
    res.json(events);
});

eventsRouter.get('/:id', function(req, res){
    var event = req.event;
    res.json(event || {});
});

eventsRouter.post('/', updateId, function(req, res){
    var event = req.body;
    events.push(event);
    res.json(event || {});
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

module.exports = eventsRouter;