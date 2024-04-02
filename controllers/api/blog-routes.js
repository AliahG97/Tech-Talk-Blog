const router = require('express').Router();
const { Comment, BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

//Get All comments
router.get('/comment/:id', async (req, res) => {
    try {
        const comments = await Comment.findAll({
            where: {
                postId: req.params.id
            }
        });
        res.json(comments);
    } catch (e) {
        console.log(e)
    }
});

// Put (update posts)
router.put('/:id', withAuth, async (req, res) => {
    try {
        console.log("AAAAAAAAAAAA")
        console.log(req.body)
        
        //we need to use update method on the BlogPost
    
        // TODO: fix this! checkout the CRUD activities in Sequalized Module 13
        const updateBlog = await BlogPost.findByPk(req.params.id);
        if (!updateBlog){
            return res(404).json({ error: "Blog post not found"});
        }
       await updateBlog.update(req.body);
       res.status(200).json(updateBlog);
      

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk(req.params.id);

        if (blogPostData) {

            await blogPostData.destroy();
            res.status(200).json({ message:'Post deleted successfully' });
         
        } else {
            res.status(404).json({ message: 'Post not found'});
        }
    }catch (err) {
        console.error(err);
        res.status(500).json(err);
    }

});

module.exports = router;