const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/petshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
//cheacking if the connection is OK
mongoose.connection.on('connected',()=>{  console.log('connection succseded')});

const petsRouter = require('./api/routes/pets');

//app.use('/', petsRouter);
app.use('/pets', petsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
