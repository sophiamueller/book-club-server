module.exports = function(app) {
  app.use('/', require('../routes/index'))
  app.use('/books', require('../routes/books'))
}
