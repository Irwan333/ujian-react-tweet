const User      = require('../app/models/users');
const Komen      = require('../app/models/komen');

exports.home = async (req, res) => {
    res.send('ini di route home!');
}

exports.users = async (req, res) => {
    User.find({}, function(err, users){
    res.json(users);
  });
}

exports.profile = async (req, res) => {
    res.json(req.decoded._doc);
}

exports.tambahKomen = async(req,res) => {
    const komen = new Komen(req.body);
    const status = await komen.save();
    res.send(JSON.stringify({"status": 200, "error" : null, "response" : status}));
}

exports.listKomen = async(req,res) => {
    const data = await Komen.find();
    res.send(JSON.stringify({"status": 200, "error" : null, "response" : data}));
}