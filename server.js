const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout-tracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
app.use(require('./routes/html-routes'));
app.use(require('./routes/api-routes'));
app.listen(PORT, () => {
  console.log(`Running On Port ${PORT}`);
});
