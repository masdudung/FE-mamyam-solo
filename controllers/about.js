var express = require('express');
var router = express.Router();

class AboutController {

    init(){
        router.get('/', this.get());
        return router;
    }


    get() {
        return (req, res, next) => {
            try {
                console.log('about')
                res.render('about', { title: 'about', layout: 'layout' });
            } catch (error) {
                console.error(error)
            }
        }
    }
}

module.exports = new AboutController();