const mongoose = require('mongoose');
const schema = mongoose.Schema;

const taskSchema = new schema({ 
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    start: {
        type: Date,
        default: Date.now(),
        required: false
    },
    end: {
        type: Date,
        required: false
    },
    status: {
        type: String, 
        required: false,
        enum: ['pending', 'done', 'in-progress']
    },
    geolong: {
        type: Number,
        required: false
    },
    geolat: {
        type: Number,
        required: false
    }
})
module.exports = mongoose.model('task', taskSchema);