const { conn } = require('./src/db.js');
const connDB   = require('../api/src/db');
const server = require('./src/app');

// Syncing all the models at once.
//conn.sync({ force: true }).then(() => {
connDB();
server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
//});