const { Book, Author } = require("../src/models");
const authors = require("./data/authors.json");
const books = require("./data/books.json");
const config = require("../config");
const mongoose = require("mongoose");
const Promise = require("bluebird");

// Connect to mlab database
mongoose.connect(config.MONGO_URL, {
	useNewUrlParser: true,
	useCreateIndex: true
});
let db = mongoose.connection;

db.on("open", async () => {
	db.dropDatabase();

	console.log("Generate books...");
	await Promise.all(
		books.map(book => {
			Book.create(book);
		})
	);

	console.log("Generate authors...");
	Promise.all(
		authors.map(author => {
			Author.create(author);
		})
	);
	console.log("Done!!!");
});
