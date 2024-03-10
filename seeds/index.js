const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedBlogPost = require('./BlogPostData');

const seedAll = async () => {
    await sequelize.sync({ force:true});

    await seedUsers();
    await seedBlogPost();

    process.exit(0);
};

seedAll();