var express = require('express');
var router = express.Router();

class NewsController {

    init(){
        router.get('/', this.get());
        return router;
    }


    get() {
        return (req, res, next) => {
            try {
                console.log('news')
                res.render('news', { title: 'news', layout: 'layout' });
            } catch (error) {
                console.error(error)
            }
        }
    }
}

module.exports = new NewsController();