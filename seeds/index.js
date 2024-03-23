const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedBlogPost = require('./BlogPostData');
const seedCommentPost = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ force:true});

    await seedUsers();
    await seedBlogPost();

    await seedCommentPost();

    process.exit(0);
};

seedAll();