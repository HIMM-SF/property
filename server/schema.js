const mongoose = require('./db');

const Profile = mongoose.model('Profiles', new mongoose.Schema({
    title: String,
    userImg: String,
    city: String,
    price: Number,
    userName: String,
    numberOfMaxGuest: Number,
    numberOfBedrooms: Number,
    numberOfBeds: Number,
    numberOfBaths: Number,
    listingBody: String,
    highlight: [
        {
            characteristic: String,
            description: String
        }
    ],
    amen: [
        {
            title: String
        }
    ]
}, { typeKey: '$type' } ));


const query = (callback) => {
    Profile.find({}, function(err, repos) {
        if (err) {
            console.log(err)
        } else {
            callback(null, repos)
        }
    })
}

module.exports = Profile;
module.exports.query = query;