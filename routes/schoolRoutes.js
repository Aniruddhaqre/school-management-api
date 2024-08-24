const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');
const schoolValidation = require('../validations/schoolValidation');

// Route to add a new school
router.post('/addSchool', (req, res, next) => {
  const { error } = schoolValidation.validateSchool(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  schoolController.addSchool(req, res, next);
});

// Route to list schools sorted by proximity
router.get('/listSchools', (req, res, next) => {
  const { latitude, longitude } = req.query;
  if (!latitude || !longitude) {
    return res.status(400).send('Latitude and longitude are required.');
  }
  schoolController.listSchools(req, res, next);
});

module.exports = router;
