const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateUserInput = require('../../validation/addUser');

// Load User model
const User = require('../../models/User');



// @route   GET api/users/add
// @desc    Add user
router.post('/add', (req, res) => {
    const { errors, isValid } = validateUserInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            errors.email = 'Email already exists';
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                contact: req.body.contact
            });
            newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));

        }
    });
});


//@route GET /api/users/all
//desc return all users

router.get('/all', (req, res) => {
    const errors = {};
    User.find()
        .then(users => {
            if (!users) {
                errors.nousers = "There is no User";
                res.status(404).json(errors);
            }
            res.json(users);
        })
        .catch(err => res.json({ users: "There is no Users" }));
});



//@route GET /api/users/:id
//desc return current users

router.get('/:id', (req, res) => {
    const errors = {};
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                errors.nousers = "There is no User";
                res.status(404).json(errors);
            }
            res.json(user);
        })
        .catch(err => res.json({ users: "There is no User" }));
});




// @desc    Edit user
router.post('/update/:id', (req, res) => {
    const { errors, isValid } = validateUserInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const userFields = {};
    if (req.body.name) userFields.name = req.body.name;
    if (req.body.address) userFields.name = req.body.address;
    if (req.body.email) userFields.name = req.body.email;
    if (req.body.contact) userFields.name = req.body.contact;
    User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: userFields },
        { new: true }
    ).then(profile => res.json(profile));

});





// @route   DELETE api/users/:id
// @desc    Delete user

router.delete('/:id', (req, res) => {
    //check for valid user
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                res.status(404).json({ userNotFound: "User not Found" });
            };
            user.remove().then({ success: true });
        })
        .catch(err => res.status(404).json({ usernotfound: "User 9 Not Found !" }));
});



module.exports = router;