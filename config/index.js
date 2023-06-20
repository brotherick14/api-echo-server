require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  SECRET_KEY: process.env.SECRET_KEY,
  API_URL: process.env.API_URL
};