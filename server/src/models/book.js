const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title: {
		type: String,
		unique: true
	},
	author: String,
	description: {
		type: String,
		required: true
	},
	genres: [
		{
			type: String
		}
	],
	imageUrl: String,
	data: [
		{
			text: { type: String, required: true, trim: true },
			content: { type: String, required: true, trim: true }
		}
	]
});

module.exports = mongoose.model("Book", bookSchema);
