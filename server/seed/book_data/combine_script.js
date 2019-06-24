const fs = require("fs");
const path = require("path");
let booksPath = __dirname;

let books = [];
fs.readdirSync(booksPath).forEach(file => {
	if (file !== "gen_script.js" && file !== "combine_script.js") {
		let rawData = fs.readFileSync(path.join(booksPath, file), "utf-8");
		let book = JSON.parse(rawData);
		books.push(book);
	}
});

let resultPath = path.join(__dirname, "../", "books.json");
fs.writeFile(
	resultPath,
	JSON.stringify(books, null, 2), // optional params to format it nicely
	err =>
		err ? console.error("Data not written!", err) : console.log("Data written!")
);
