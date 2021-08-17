const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`App lisntening at http://localhost:${app.get('port')}`);
});
