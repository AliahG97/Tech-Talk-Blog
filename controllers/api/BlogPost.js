
const express = require('express');
const { BlogPost } = require('../../models');
const router = express.Router();


//Homeroute
router.get('/', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll();

        res.render('homepage', {blogPostData});
    }catch (error){
        console.error('Error fetching blog posts, error');
        res.status(500).send('Internal Sever Error');
    }
});

// exports.BlogPost = async (req,res) => {
//     try {
//         const BlogPost = await BlogPost.find();
//         res.json(BlogPost);
//     } catch (error) {
//         console.error('Error fetching blog posts', error);
//         res.status(500).json({ message: 'Internal server Error'});
//     }
// };


module.exports = router;