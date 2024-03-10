const {BlogPost} = require('../models');

const BlogPostData = [
    {
        title: 'Why MVC is so important',
        content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId:1
    },
    {
        title: 'Authentication Vs. Authorization',
        content: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed to access the system',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId:2
    },
    {
        title: 'Object-Relational Mapping',
        content: 'I have a really loved learning about ORMs. It has really simplified the way I create queries in SQL!',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId:1
    },

];
const seedBlogPost = () => BlogPost.bulkCreate(BlogPostData);

module.exports = seedBlogPost;