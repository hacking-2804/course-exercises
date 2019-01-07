var mongoose = require('mongoose');

// define the schema for our user model
var accountSchema = mongoose.Schema({
    // Post Information
    _id                 : {},
    course        		: { type: String, default: '' },
    question_type       : { type: String, default: '' },
    old_id              : { type: String, default: '' },
    term                : { type: String, default: '' },
    category            : { type: Array, default: [] },
    difficulty          : { type: String, default: '' },
    keywords            : { type: Array, default: [] },
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Model', accountSchema);