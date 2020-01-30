const controller = require('../controller/controller');
const express   = require ('express');
const jwt       = require('jsonwebtoken');
const app       = express();
const router	= express.Router();
const User      = require('../app/models/users');

module.exports = app => {
	// Router API

	router.post('/login', function(req, res){
  User.findOne({
    email: req.body.email
  }, function(err, user){
    if(err) throw err;

    if (!user) {
      res.json({success: false, message: 'User tidak ada di database'});
    }else {
      if (user.password != req.body.password) {
        res.json({succes: false, message: 'password user salah!'});
      }
      else {
        //membuat token
        let token = jwt.sign(user, app.get('secretKey'), {
          expiresIn:  604800
        });

        //ngirim balik token
        res.json({
          succes : true,
          message: 'token berhasil didapatkan!',
          token  : token
        })
      }
    }
  })
});

router.get('/', controller.home);

//proteksi route dengan token
router.use(function(req, res, next){
  //mengambil token: req.body.token || req.query.token ||
  var token = req.headers['authorization'];

  //decode token
  if(token){

    jwt.verify(token, app.get('secretKey'), function(err, decoded){
      if(err)
        return res.json({ success: false, message: 'problem dengan token' });
      else {
        req.decoded = decoded;

        //apakah sudah expire
        if(decoded.exp <= Date.now()/1000) {
          return res.status(400).send({
            success:false,
            message:'token sudah expire',
            date   : Date.now()/1000,
            exp    : decoded.exp
          });
        }

        next();
      }
    });

  }else{
    return res.status(403).send({
      success:false,
      message:'token tidak tersedia'
    });
  }

});

router.get('/users', controller.users);

router.get('/profile', controller.profile);

router.post('/komen', controller.tambahKomen);
router.get('/komen', controller.listKomen);

app.use('/api', router);
}