const express = require('express');
const echoRoutes = require('./routes/echoRoutes');
const config = require('./config');

const app = express();
app.use('/', echoRoutes);

app.listen(config.PORT, () => {
  console.log(`API server is running on http://localhost:${config.PORT}`);
});