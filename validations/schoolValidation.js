const Joi = require('joi');

const schoolSchema = Joi.object({
  name: Joi.string().min(1).required(),
  address: Joi.string().min(1).required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required()
});

exports.validateSchool = (data) => {
  return schoolSchema.validate(data);
};
