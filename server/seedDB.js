const mongoose = require('mongoose');
const Profile = require('./schema');
const faker = require('faker');


const profiles = [];
for (let i = 0; i < 15; i++) {
    let highlight = [];
    // faker.random.number({min: 4})
    for (let i = 0; i < 4; i++) {
        highlight.push({
            characteristic: faker.random.word(),
            description: faker.lorem.sentence()
        });
    };
    let amen = [];
    for (let i = 0; i < 10; i++) {
        amen.push({
            title: faker.random.word()
        });
    };
    profiles.push({
        title: faker.lorem.sentence(),
        userImg: faker.image.avatar(),
        city: faker.address.city(),
        price: Math.floor(Math.random()*2000),
        userName: faker.name.firstName(),
        numberOfMaxGuest: Math.floor(Math.random()*20),
        numberOfBedrooms: Math.floor(Math.random()*6),
        numberOfBeds: Math.floor(Math.random()*8),
        numberOfBaths: Math.floor(Math.random()*6),
        listingBody: faker.lorem.paragraphs(20),
        amen,
        highlight
    })
}

Profile.insertMany(profiles, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('successfully added to DB');
        mongoose.connection.close();
    }
})
