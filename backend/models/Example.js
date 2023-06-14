const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },

    groups: [{

    }],

    securityRules: [{

    }]
})

module.exports = mongoose.model('Courses', courseSchema, 'Courses')