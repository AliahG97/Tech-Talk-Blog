const express = require('express');
const router = express.Router();
const { BlogPost, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Get homepage
router.get('/', async (req, res) => {
    try { 
        const BlogPostData = await BlogPost.findAll({
            include:[
                {
                    model: Comment,
                    attributes: [ 'content', 'createdAt', 'updatedAt'],
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
            // newValue.Comments = newValue.Comments.map(obj => {

            //     return {
            //         content: obj.content,
            //         user: obj.User.username,
            //         createdAt: obj.createdAt,
            //         updatedAt: obj.updatedAt
                    
            //     }
            // }) 
            // console.log('Comments: ', newValue.Comments)
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

router.get('/signup',  (req, res) => {
     // If sessions exits, redirect the request to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

// Updating blog
// ---  /update/1
router.get('/update/:id', async(req,res) => {
    try{
        console.log(req.params.id)
        let blogId = req.params.id;

        let singleBlog = await BlogPost.findByPk(blogId);

        //console.log("ThiS IS SINGLE BLOG", singleBlog)

        let blog = singleBlog.get({plain: true})
        console.log("THIS IS BLOGGGGGG ", blog)


        res.render('updateBlog',{
            ...blog,
            loggedIn: true,
        })

    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }




 
})
module.exports = router;
