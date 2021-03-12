const express = require('express');
const htmlRouter = require('./routes/html-routes');
const apiRouter = require('./routes/api-routes');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

htmlRouter(app);
// apiRouter(app);
app.listen(PORT, () => {
  console.log(`Running On Port ${PORT}`);
});
