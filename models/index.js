const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

User.hasMany(BlogPost, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
    foreignKey: 'userId'
});

BlogPost.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete:'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId'
});

module.exports  = { User, BlogPost, Comment };