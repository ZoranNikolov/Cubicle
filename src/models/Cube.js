const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
		maxLength: 50, // check real lengths
	},
	imageUrl: {
		type: String,
		required: true,
		// Add http/httpms validation
		// match: /^https?:\/\//,
		validate: {
			validator: function(value) {
				return value.startsWith("http://") || value.startsWith("https://");
			},
			message: 'URL is invalid!'
		}
	},
	difficultyLevel: {
		type: Number,
		required: true,
		max: 6,
		min: 1,
	},
	accessories: [{
			type: mongoose.Types.ObjectId,
			ref: 'Accessory'
		}],
		owner: {
			type: mongoose.Types.ObjectId,
			ref: 'User'
		}
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;