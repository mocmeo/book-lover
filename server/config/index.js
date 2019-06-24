module.exports = {
	PORT: process.env.port || 4000,
	MONGO_URL:
		process.env.MONGO_URL ||
		"mongodb://mocmeo:test123@ds241647.mlab.com:41647/meowtain-book"
};
