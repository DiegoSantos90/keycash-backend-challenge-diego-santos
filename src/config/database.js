require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,      //'keycash-challenge',
  username: process.env.DB_USER,  //'postgres',
  password: process.env.DB_PASS,  //'docker',
  database: process.env.DB_NAME,  //'keycash-challenge',
  port: process.env.DB_PORT,      //5434,
  define: {
    timestamps: true,
    underscored: true,
  },
};