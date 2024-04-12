const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/service.controller');

router.post('/', serviceController.createService);
router.get('/', serviceController.getAllServices);
router.get('/:slug', serviceController.getServiceBySlug);
router.put('/:id', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);

module.exports = router;
