import "dotenv/config";

function auth(req, res, next) {
    const token = req.cookies.jwt;

    if(token) {
        console.log("There's a token");
    next();
        
    } else {
        console.log("No token");    
        res.redirect('/user/login');
    }
}

export default auth;