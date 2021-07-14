const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
const putRouter = require('./router/PUT');
const getRouter = require('./router/GET');
const getRouter = require('./router/DELETE');
app.use('/', putRouter);
app.use('/GET', getRouter);
app.use('/DELETE', getRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
