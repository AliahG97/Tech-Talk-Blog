const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'BlogPost',
                key: 'id'
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'user',
                key: 'id'
            }
        },
        // createdAt: {
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //     default: Date.now
        // },
        // updatedAt: {
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //     default: Date.now
        // },
    },
    {
        sequelize,
        modelName: 'Comment',
        timestamps: false,
        freezeTableName:true,
        underscored:false,
    }
);

module.exports = Comment;