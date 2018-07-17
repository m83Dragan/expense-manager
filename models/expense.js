var mongoose = require('mongoose');
Schema = mongoose.Schema;
var expenseSchema = new Schema({
    description: String,
    amount: Number,
    month: String,
    year: Number
});

module.exports = mongoose.model('expense', expenseSchema);