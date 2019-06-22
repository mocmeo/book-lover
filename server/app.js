const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
// allow cross-origin requests

app.use(cors());

// connect to mlab database
mongoose.connect(
	"mongodb://mocmeo:test123@ds241647.mlab.com:41647/meowtain-book"
);
mongoose.connection.once("open", () => {
	console.log("connected to database");
});

app.use(
	"/graphql",
	graphqlHTTP({
		schema, // schema: schema
		graphiql: true
	})
);

app.listen(4000, () => {
	console.log("Listening on port 4000");
});
