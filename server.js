// import modules
import express from 'express'

import { mst3kEpisodes } from './data/episodes-data.js'

//create Express app

const app = express()


// configure the app(app.set)
app.set('view engine', 'ejs')

//mount Middleware (app.use)


//mount routes
app.get('/', function(req, res) {
  res.redirect('/mst3kEpisodes')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/mst3kEpisodes', function(req, res) {
  res.render('mst3kEpisodes/index', {
    mst3kEpisodes: mst3kEpisodes
  })
})
//listen on port 3000

app.listen(3000, function() {
  console.log('On port 3000 I listen')
})