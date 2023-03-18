
const connDB   = require('./src/db');
const server = require('./src/app.js');
const port = process.env.PORT || 3001

connDB()
  server.listen(port, () => {
    console.log(`server raised in ${port}`); // eslint-disable-line no-console
  });
;
 