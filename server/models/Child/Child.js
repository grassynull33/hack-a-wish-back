const mongoose = require('mongoose');

const { Schema } = mongoose;

const MALE = 'M';
const FEMALE = 'F';

const childSchema = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  gender: { type: String, enum: [MALE, FEMALE], required: true },
  condition: { type: String, required: true, trim: true },
  story: { type: String, trim: true },
  interests: [{ type: String, trim: true }],
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

const Child = mongoose.model('child', childSchema);

module.exports = Child;
