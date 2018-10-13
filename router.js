module.exports = function(app) {

  // use res.render to load up an ejs view file
  // index page
  app.get('/', function(req, res) {
      res.render('index');
  });

  app.get('/home', function(req, res) {
    res.render('sample');
  })
}
