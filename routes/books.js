var express = require('express')
var router = express.Router()
var Book = require('../models/Book')

router.get('/', (req, res) => {
  Book.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  Book.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.patch('/toggle/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => {
      book.done = !todo.done
      return book.save()
    })
    .then(result => res.json(result._id))
    .catch(err => res.json(err))
})

router.get('/clear', (req, res) => {
  Book.deleteMany()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router
