var express = require('express');
var router = express.Router();
const posts = require('../model/posts')

class NewsController {

    init(){
        router.get('/', this.get());
        return router;
    }


    get() {
        return (req, res, next) => {
            try {
                let filtered = posts
                const q = req.query.q || '';
                if(q !== null || q !='' ){
                    const regex = new RegExp(q, 'i');
                    filtered = posts.filter((item) => regex.test(item.title));
                }
                
                const notfound = filtered.length > 0 ? false : true; 
                res.render('news', {posts: filtered, q: q, notfound: notfound});
            } catch (error) {
                console.error(error)
            }
        }
    }
}

module.exports = new NewsController();