const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    creationDate: { type: String, required: true },
    description: { type: String, required: true },
    taille: { type: String, required: true },
    contact: { type: String, required: true },
    localisation: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Company', schema);