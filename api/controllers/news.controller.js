const News = require('../models/news.model');

exports.createNews = async (req, res, next) => {
	try {
		const news = await News.create(req.body);
		res.status(201).json(news);
	} catch (err) {
		next(err);
	}
};

exports.getAllNews = async (req, res, next) => {
	try {
		const news = await News.find();
		res.json(news);
	} catch (err) {
		next(err);
	}
};

exports.getNewsBySlug = async (req, res, next) => {
	try {
		const news = await News.findOne({ slug: req.params.slug });
		if (!news) {
			return res.status(404).json({ message: 'News not found' });
		}
		res.json(news);
	} catch (err) {
		next(err);
	}
};

exports.updateNews = async (req, res, next) => {
	try {
		const news = await News.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!news) {
			return res.status(404).json({ message: 'News not found' });
		}
		res.json(news);
	} catch (err) {
		next(err);
	}
};

exports.deleteNews = async (req, res, next) => {
	try {
		const news = await News.findByIdAndDelete(req.params.id);
		if (!news) {
			return res.status(404).json({ message: 'News not found' });
		}
		res.json({ message: 'News deleted successfully' });
	} catch (err) {
		next(err);
	}
};
