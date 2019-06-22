const express = require("express");
// const graphqlHTTP = require("express-graphql");
const { ApolloServer, gql } = require("apollo-server");
// const app = express();
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname, "./schema/typeDefs.gql");

const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

// allow cross-origin requests
// app.use(cors());

// connect to mlab database
mongoose.connect(
	"mongodb://mocmeo:test123@ds241647.mlab.com:41647/meowtain-book",
	{ useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
	console.log("connected to database");
});

const server = new ApolloServer({
	typeDefs,
	resolvers
});

// server.applyMiddleware({ app });
server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
