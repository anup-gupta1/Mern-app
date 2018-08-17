const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateUserInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.address = !isEmpty(data.address) ? data.address : '';
    data.contact = !isEmpty(data.contact) ? data.contact : '';


    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }


    if (Validator.isEmpty(data.contact)) {
        errors.contact = 'Contact is required';
    }

    if (!Validator.isNumeric(data.contact)) {
        errors.contact = 'Contact must be a Number';
    }

    if (!Validator.isLength(data.contact, { min: 10, max: 10 })) {
        errors.contact = 'Contact must be a 10 digit Number';
    }

    if (Validator.isEmpty(data.address)) {
        errors.address = 'Address field is required';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    };
};
