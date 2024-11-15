import e from "express";
import User from "../models/User.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import "dotenv/config";

const router = e.Router();
const privateKey = process.env.PRIVATEKEY;

// rotas de sigin
router.get('/signin', (req, res) => {
    res.render('user/signin');
});

router.post('/signin', async (req, res) => {
    try {
        const user = await User.create(req.body);
        jwt.sign({id: user._id}, privateKey, {expiresIn: 3600}, (err, token) => {
            res.cookie('jwt', token, {maxAge: 3600*24, httpOnly: true});
            // res.redirect('/dashboard');
            res.redirect('/');
        })
        console.log(user);
        
    } catch (error) {
        console.log(error.message);
        
    }
});

// rotas de login
router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', async (req, res) => {
    try {
         const user = await User.findOne({name: req.body.name});
         
         bcrypt.compare(req.body.password, user.password);
         
         jwt.sign({id: user._id}, privateKey, {expiresIn: 3600*24}, (err, token) => {
             res.cookie('jwt', token, {maxAge: 3600*24, httpOnly: true});
             res.redirect('/');
         })
         
         console.log("login successfull");
         
    } catch (error) {
         console.log(error.message);
         
    }
 });

export default router;