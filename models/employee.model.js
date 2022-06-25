const mongoose = require('mongoose');
var validator = require("email-validator");

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        unique: true,
        required: 'This field is required'
    },
    email: {
        type: String,
        unique: true,
    },
    mobile: {
        type: String,
        unique: true,
    },
    city: {
        type: String
    }
})

// custom validation for email

employeeSchema.path('email').validate((val) => {
    return validator.validate(val);
}, 'Invalid Email');

mongoose.model('Employee', employeeSchema);