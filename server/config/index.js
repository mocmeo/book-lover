module.exports = {
	PORT: process.env.port || 4000,
	MONGO_URL:
		process.env.MONGO_URL ||
		"mongodb://mocmeo:test123@159.65.14.173:27017/meowtain-book"
};
