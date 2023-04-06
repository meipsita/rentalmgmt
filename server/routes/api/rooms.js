const express = require('express');
const router = express.Router();

// Load Room model
const Room = require('../../models/Room');

// @route GET api/rooms/test
// @description tests rooms route
// @access Public
router.get('/test', (req, res) => res.send('Room route testing!'));

// @route GET api/rooms
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Room.find()
    .then((rooms) => res.json(rooms))
    .catch((err) => res.status(404).json({ noroomsfound: 'No Room found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Room.findById(req.params.id)
    .then((rooms) => res.json(rooms))
    .catch((err) => res.status(404).json({ noroomfound: 'No Room found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Room.create(req.body)
    .then((rooms) => res.json({ msg: 'Room added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this rooms' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Room.findByIdAndUpdate(req.params.id, req.body)
    .then((rooms) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Room.findByIdAndRemove(req.params.id, req.body)
    .then((rooms) => res.json({ mgs: 'Room entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a rooms' }));
});

module.exports = router;