var express = require('express');
var router = express.Router();

class ContactController {

    init(){
        router.get('/', this.get());
        return router;
    }


    get() {
        return (req, res, next) => {
            try {
                console.log('contact')
                res.render('contact', { title: 'contact', layout: 'layout' });
            } catch (error) {
                console.error(error)
            }
        }
    }
}

module.exports = new ContactController();