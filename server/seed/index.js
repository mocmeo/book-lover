const mongoose = require("mongoose");
const config = require("../config");
const path = require("path");
const fs = require("fs");
const Promise = require("bluebird");

const { Book, Author } = require("../src/models");
const books = require("./books.json");
const authors = require("./authors.json");

// Connect to mlab database
mongoose.connect(config.MONGO_URL, {
	useNewUrlParser: true,
	useCreateIndex: true
});
let db = mongoose.connection;

// Generate new data
db.on("open", async () => {
	db.dropDatabase();

	console.log("Generate books...");
	await Promise.all(
		books.map(book => {
			Book.create(book);
		})
	);

	console.log("Generate authors...");
	await Promise.all(
		authors.map(author => {
			Author.create(author);
		})
	);
	console.log("Done!!!");
});
