const express = require('express');
const htmlRouter = require('./routes/html-routes');
const apiRouter = require('./routes/api-routes');
const mongoose = require('mongoose');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout-tracker',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);
htmlRouter(app);
// apiRouter(app);
app.listen(PORT, () => {
  console.log(`Running On Port ${PORT}`);
});
