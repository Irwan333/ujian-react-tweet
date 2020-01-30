const express     = require ('express');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const app         = express();
const cors        = require('cors');

// ----------------------- //
const config  = require('./app/config');
const port    = 8000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended : true
}))

mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useMongoClient: true })
  .then(db => console.log('db connected'))
  .catch(err => console.log(err))
app.set('secretKey', config.secret);

// const corsOptions = {
//  origin      : '*',
//  methods     : ['*'],
//  allowedHeaders  : ['Content-type', 'tokenshop']
//  };
app.use(cors());
//prefix /api
let test = require('./routes/router')(app);
console.log(test);


app.listen(port,() => {
  console.log('Berhasil menjalankan server pada port ' + port)
});