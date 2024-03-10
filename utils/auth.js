const withAuth =(req, res, next) => {
    // if the user isnt logged in, redirect them to the login route
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};
module.exports = withAuth;
