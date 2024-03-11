// const express = require('express');
// const router = express.Router();

// // Assuming you have a function to fetch blog post data from your database
// const { getBlogPosts } = require('./blogPostController');

// // Define a route handler for the home route
// router.get('/', async (req, res) => {
//     try {
//         // Fetch the blog post data
//         const blogPosts = await getBlogPosts();

//         // Render the homepage template with the blog post data
//         res.render('home', { blogPosts });
//     } catch (error) {
//         // Handle any errors
//         console.error('Error fetching blog posts:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// module.exports = router;
