const mongoose = require('mongoose');

const { Schema } = mongoose;

const MALE = 'M';
const FEMALE = 'F';

const childSchema = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  age: { type: Number, min: 0, max: 100, required: true },
  gender: { type: String, enum: [MALE, FEMALE], required: true },
  condition: { type: String, required: true, trim: true },
  story: { type: String, trim: true },
  interests: [{ type: String, trim: true }],
  wish: { type: String, trim: true, required: true },
  amountDonatedByUser: { type: Number, min: 0, required: true },
  amountDonatedByOthers: { type: Number, min: 0, required: true },
  amountToCompletion: { type: Number, min: 0, required: true },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

const Child = mongoose.model('child', childSchema);

module.exports = Child;
