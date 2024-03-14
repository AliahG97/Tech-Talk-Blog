const { Comment } = require('../models');
const commentData = [
    {
        content: "This is a great post!",
        postId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        content: "I really enjoyed reading this.",
        postId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        content: "Looking forward to more content like this.",
        postId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        content: "Looking forward to more content like this",
        postId: 2,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;