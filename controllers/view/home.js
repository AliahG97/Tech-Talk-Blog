const express = require('express');
const router = express.Router();
const { BlogPost, Comment, User } = require('../../models');

// Get homepage
router.get('/', async (req, res) => {
    try { 
        const BlogPostData = await BlogPost.findAll({
            include:[
                {
                    model: Comment,
                    attributes: [ 'content'],
                    include: [
                        {
                            model: User,
                            attributes: [ 'username'
                            ]
                        }
                    ]
            
                }
            ]
        });
        const data= BlogPostData.map((x) =>{
            const newValue = x.get({plain:true})
            newValue.Comments = newValue.Comments.map(obj => {

                return {
                    content: obj.content,
                    user: obj.User.username
                    
                }
            }) 
            console.log('Comments: ', newValue.Comments)
            return newValue
    });
        // console.log('data: ', data);
        res.render('homepage',{ 
            loggedIn: req.session.loggedIn,
            blogPost: data
        });
    }catch (error) {
        console.error('Error fetching tech talk data:', error);
        res.status(500).send('internal sever error');

    }
});
//Get login
router.get('/login', (req, res) => {
    // If sessions exits, redirect the request to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;
