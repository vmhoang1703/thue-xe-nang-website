const Service = require('../models/service.model');

exports.createService = async (req, res, next) => {
	try {
		const service = await Service.create(req.body);
		res.status(201).json(service);
	} catch (err) {
		next(err);
	}
};

exports.getAllServices = async (req, res, next) => {
	try {
		// const services = await Service.find();
		res.json('hello');
	} catch (err) {
		next(err);
	}
};

exports.getServiceBySlug = async (req, res, next) => {
	try {
		const service = await Service.findOne({ slug: req.params.slug });
		if (!service) {
			return res.status(404).json({ message: 'Service not found' });
		}
		res.json(service);
	} catch (err) {
		next(err);
	}
};

exports.updateService = async (req, res, next) => {
	try {
		const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!service) {
			return res.status(404).json({ message: 'Service not found' });
		}
		res.json(service);
	} catch (err) {
		next(err);
	}
};

exports.deleteService = async (req, res, next) => {
	try {
		const service = await Service.findByIdAndDelete(req.params.id);
		if (!service) {
			return res.status(404).json({ message: 'Service not found' });
		}
		res.json({ message: 'Service deleted successfully' });
	} catch (err) {
		next(err);
	}
};
