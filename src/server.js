const app = require('./app');

const port = process.env.NODE_PORT || 3333;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});