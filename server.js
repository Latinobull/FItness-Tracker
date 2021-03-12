const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(require('./routes/html-routes'));
app.use(require('./routes/api-routes'));

app.listen(PORT, () => {
  console.log(`Running On Port ${PORT}`);
});
