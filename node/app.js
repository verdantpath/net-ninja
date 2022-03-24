const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const secure = require('./secure');


// connect to MongoDB
const dbURI = secure.mongoAccess
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.then((result) => console.log('connected to db'))  
// .then(result => app.listen(3000))
  .catch(err => console.log(err));

// express app
const app = express();

// listen for requests

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));




// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');


// main routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/blogs', (req,res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { title: 'All Blogs', blogs: result })
    })
    .catch(err => console.lof(err))
});

app.post('/blogs', (req,res) => {
  const blog = new Blog(req.body);

  blog.save()
    .then((result) => {
      res.redirect('/blogs')
    })
    .catch((err) => {
      console.log(err);
    })
})

app.get('/blogs/:id', (req,res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.render('details', { blog: result , title: 'Blog Details'})
    })
    .catch(err => console.log(err))
})

app.delete('/blogs/:id', (req,res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(result => {
       res.json({ redirect: '/blogs' })
    })
    .catch(err => console.log(err))
})



// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
}); 