const schoolService = require('../services/schoolService');

exports.addSchool = async (req, res) => {
  try {
    await schoolService.addSchool(req.body);
    res.status(201).send('School added successfully');
  } catch (err) {
    res.status(500).send('Error adding school');
  }
};

exports.listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    const schools = await schoolService.listSchools(latitude, longitude);
    res.json(schools);
  } catch (err) {
    res.status(500).send('Error fetching schools');
  }
};
