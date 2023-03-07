
const connDB   = require('./src/db');
const server = require('./src/app.js');
const port = process.env.PORT || 3001

// Syncing all the models at once.
//conn.sync({ force: true }).then(() => {
connDB.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`server raised in ${port}`); // eslint-disable-line no-console
  });
});
//});