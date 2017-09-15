module.exports = function (sequelize, DataTypes){		//if you start getting doubles in entry come look at this
	return sequelize.define('log', {
		desc: DataTypes.STRING,
		result: DataTypes.STRING,
		owner: DataTypes.INTEGER,
		def: DataTypes.STRING
		// field: DataTypes.STRING

	},{ 
	});
};