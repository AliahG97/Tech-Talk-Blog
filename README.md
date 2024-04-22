# Tech Talk Blog

## Description
The Tech Blog project is a CMS-style blog site designed for developers to publish articles, blog posts, and share their thoughts and opinions on various tech topics. The motivation behind this project is to provide a platform for developers to engage in meaningful discussions and showcase their expertise. The project was built to address the need for a centralized platform where developers can interact, share knowledge, and collaborate effectively. Through this app, developers can learn about new technologies, stay updated on industry trends, and contribute to the tech community.

## Table of Contents
- Installation
- Screenshot
- Usage
- Features
- Contributions
- Credits
- License
- Testing

## Installation
1. To run the project locally, follow these steps:
2. Clone the repository to your local machine using git clone https://github.com/AliahG97/Tech-Talk-Blog.git.
3. Navigate to the project directory.
4. Install dependencies by running npm install.
5. Set up your mySQL database by importing the provided schema and seeds files.
6. Update the database connection details (PORT) in the application code.
7. Start the application with npm run watch given nodemon.

## Screenshot
![ReadMe Gen Screenshot](./public/images/techtalkblog-screenshot.gif) 
Deployed: https://tech-talk-blog-a3ece97b4b44.herokuapp.com/
Repo: https://github.com/AliahG97/Tech-Talk-Blog
Watch video: https://www.youtube.com/watch?v=dmxyTTSWcUs

## Usage
Users can access the Tech Blog site via a web browser. The homepage displays all existing blog posts from all users, navigation links, and options to log in or sign up. Users can create an account, log in, view blog posts, comment on posts, create new posts, and manage their posts from the dashboard.

## Features
1. View blog: Users can view all blog posts on the home page upon arriving on the application web page without being logged in.

2. Sign up & Login: In order for the users to comment on the blogs that they're seeing or create blog posts in the dashboard, they must be login or create an account.

3. Comment: The user can leave a comment on the homepage under a blog post. The comment will be displayed below the blogpost , with the time and date that the comment was published.

4. Create new post: When logged in, the user can go to the dashboard, a list of all their existing posts that they have created under their username specifically will be listed by title. They'll also have the option to create a new blog post. The user must create a title, and type in some content for the blog, then submit, and it will be displayed in their dashboard as well as at the bottom of the homepage.

5. Update existing post: If a user wants to edit one of their existing blogs, they would simply click the update button below the blog title listed with their existing post on the dashboard page. Once they select the blog post they want to update, the existing content will populate in the input boxes so that he user can simply edit the existing content rather than rewriting it entirely. Upon submitting the changes, the updated blog post is displayed on the homepage and dashboard.

6. Delete existing post: If the user wants to delete an existing blog post, they would just click the update but for the desired blog post. and they would click the delete button. Once they return to the homepage, that blog post will be removed from the list of all users existing blog posts as well as if they return to their dashboard page.

## Contribution
- Add CSS

## Credits
Aliah Guerra (https://github.com/AliahG97) 


## License
This project is licensed under the MIT License.

## Testing
1. Cd to project file
2. npm install
3. npm run seed
4. npm start
5. npm run watch