import e from "express";
import Category from "../models/Category.js";
import auth from '../middlewares/auth.js';
const router = e.Router();

// adicionar nova categoria
router.get('/add', (req, res) => {
    res.render('category/add');
});

router.post('/add', async (req, res) => {
    try {
        const content = await Category.create(req.body);
        res.redirect('/category/all');
    } catch (error) {
        
    }
});

export default router;