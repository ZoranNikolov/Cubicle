const { Schema, model } = require("mongoose");

const cubeSchema = new Schema({
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
	},
	difficultyLevel: {
		type: Number,
		required: true,
		max: 6,
		min: 1,
	},
});

const Cube = model("Cube", cubeSchema);

module.exports = Cube;