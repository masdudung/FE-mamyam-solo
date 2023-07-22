var express = require('express');
var router = express.Router();

class TermController {

    init(){
        router.get('/', this.get());
        return router;
    }


    get() {
        return (req, res, next) => {
            try {
                console.log('term')
                res.render('term', { title: 'news', layout: 'layout' });
            } catch (error) {
                console.error(error)
            }
        }
    }
}

module.exports = new TermController();