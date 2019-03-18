var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public')); //indica al  servidor que se sirva de manera estática la carpeta public

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/signup', function(req, res) {
  res.render('index');
});

app.get('/signin', function(req, res) {
  res.render('index');
});

app.listen(3000, function(err){
	if(err) return console.log('Hubo un error'), process.exit(1);

	console.log('Program de Inicio escuchando por el puerto 3000');
})