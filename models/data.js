const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    surname: {
        type: String,
        required: [true, 'Surname field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    date: {
        type: String,
        required: [true, 'Date field is required']
    },
});

const Form = mongoose.model('data', FormSchema);

module.exports = Form;