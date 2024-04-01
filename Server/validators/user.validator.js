const Joi = require('joi');

const userValidator = Joi.object({
  username: Joi.string()
    .min(3)
    .max(30)
    .required()
    .lowercase()
    .trim()
    .pattern(/^[a-zA-Z0-9_]+$/)
    .messages({
      'string.min': 'Username must be at least 3 characters long',
      'string.max': 'Username must be at most 30 characters long',
      'string.pattern.base': 'Username can only contain alphanumeric characters and underscores',
    }),
  email: Joi.string()
    .email()
    .required()
    .lowercase()
    .trim()
    .messages({
      'string.email': 'Please enter a valid email address',
    }),
  password: Joi.string(),
  role: Joi.string()
    .valid('admin', 'user')
    .default('user'),
  fullname: Joi.string()
    .required()
    .trim()
    .messages({
      'string.empty': 'Full name is required',
    }),
  profileImage: Joi.string()
    .uri()
    .default('https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration\\_268834-538.jpg'),
  refreshToken: Joi.string(),
  questionsDone: Joi.array()
    .items(Joi.string().hex().length(24))
    .messages({
      'string.length': 'Invalid ObjectId format',
      'string.hex': 'Invalid ObjectId format',
    }),
});

module.exports = userValidator;