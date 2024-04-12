const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
	title: { type: String, required: true },
	slug: { type: String, required: true, unique: true },
	shortDescription: { type: String, required: true },
	description: { type: String, required: true },
	imageUrl: { type: String, required: true },
	metadata: {
		title: { type: String, required: true },
		description: { type: String, required: true },
		keywords: { type: [String], required: true },
	},
	createdAt: { type: Date, default: Date.now },
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
