const { Book, Author } = require("../src/models");
const authors = require("./authors.json");
const books = require("./books.json");
const config = require("../config");
const mongoose = require("mongoose");
const Promise = require("bluebird");

// Connect to database
mongoose.connect(config.MONGO_URL, {
	useNewUrlParser: true,
	useCreateIndex: true
});
let db = mongoose.connection;

db.on("open", async () => {
	db.dropDatabase();
	Promise.all(
		books.map(book => {
			Book.create(book);
		})
	).then(() => {
		console.log("Generate books...");
	});

	Promise.all(
		authors.map(author => {
			Author.create(author);
		})
	).then(() => {
		console.log("Generate authors...");
		console.log("Done!!!");
	});
});
