const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

const routes = require('./routes/index');
import controllerRouting from './routes/index';

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
