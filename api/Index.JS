const { conn } = require('./src/db.js');
<<<<<<< HEAD
const connDB   = require('../api/src/db');
const server = require('./src/app');
=======
const connDB   = require('./src/db');
const server = require('./src/app.js');
>>>>>>> fa71414f0bb8c18b3f91182b1efdc25f18f1cee6

// Syncing all the models at once.
//conn.sync({ force: true }).then(() => {
connDB();
server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
//});