const mongoose	= require('mongoose');
const Schema	= mongoose.Schema;

const userSchema	= new Schema({
	komen_email	: String,
	komen_isi	: String
});

const Komentar	= mongoose.model('Komentar', userSchema);
module.exports	= Komentar;