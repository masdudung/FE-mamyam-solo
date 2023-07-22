var express = require('express');
var router = express.Router();
const posts = require('../model/posts')

class IndexController{

    init(){
        router.get('/', this.get());
        return router;
    }

    get() {
        return (req, res, next) => {
            try {
                res.render('index', {posts: posts});
            } catch (error) {
                console.error(error)
            }
        }
    }
}

module.exports = new IndexController();