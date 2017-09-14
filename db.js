var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL, || '//postgres://postgres:baseball28@localhost:5432/workoutlog',{
	
	dialect: 'postgres'
});



sequelize.authenticate().then(
	function() {
		console.log('connected to workoutlog postgres db');
	},
	function(err){
		console.log(err);
	}

);

var User=sequelize.import('./models/user');

module.exports = sequelize; //allows this file to be exported so other files that require it can use it. 

//this page deals with working with the datatbase