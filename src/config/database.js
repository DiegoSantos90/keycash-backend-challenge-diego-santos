module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'keycash-challenge',
  port: 5434,
  define: {
    timestamps: true,
    underscored: true,
  },
};