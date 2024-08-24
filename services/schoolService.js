const db = require('../config/db');
const distanceCalculator = require('../utils/distanceCalculator');
const schoolModel = require('../models/schoolModel');

exports.addSchool = async (schoolData) => {
  const { name, address, latitude, longitude } = schoolData;
  await schoolModel.addSchool({ name, address, latitude, longitude });
};

exports.listSchools = async (latitude, longitude) => {
  const schools = await schoolModel.getAllSchools();
  return schools.map(school => ({
    ...school,
    distance: distanceCalculator.calculateDistance(latitude, longitude, school.latitude, school.longitude)
  })).sort((a, b) => a.distance - b.distance);
};
