const app = require('express')();
const routes = require('./routes');

const PORT = process.env.PORT;

app.use('/', routes);

app.listen(PORT, () => {
  console.log('sprintman-api listening', PORT);
});
