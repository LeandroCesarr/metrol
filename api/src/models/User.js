const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type: String, require: true},
    email: {
        type: String, 
        require: true, 
        index: {
            unique: true
        }
    },
    password: {type: String, require: true},
    repairShop: {type: mongoose.ObjectId, ref: 'RepairShop'}
}, {
    timestamps: true
});

module.exports = mongoose.model('User', schema, 'user');