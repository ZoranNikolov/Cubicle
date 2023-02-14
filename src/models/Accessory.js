const mongoose = require("mongoose");

const accessorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
		validate: {
			validator: function(value) {
				return value.startsWith("http://") || value.startsWith("https://");
			},
			message: 'URL is invalid!'
		}
	},
	description: {
		type: String,
		required: true,
		maxLength: 50,
	},
});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;
