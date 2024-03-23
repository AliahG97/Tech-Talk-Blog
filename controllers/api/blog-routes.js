const router = require('express').Router();
const { Comment } = require('../../models');

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

module.exports = router;