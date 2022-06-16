const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
pic: {
        type: String
    },
firstname: {
        type: String
    },
        
lastname: {
	type: String
},
email: {
	type: String
},
mobile: {
	type: Number
}
}, {
	collection: 'contacts'
})

module.exports = mongoose.model('Contacts', contactSchema)
