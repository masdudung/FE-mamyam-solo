var express = require('express');
var router = express.Router();

class IndexController{

    init(){
        router.get('/', this.get());
        return router;
    }

    get() {
        return (req, res, next) => {
            try {
                console.log('index')
                res.render('index', { title: 'Home', layout: 'layout' });
            } catch (error) {
                console.error(error)
            }
        }
    }
}

module.exports = new IndexController();