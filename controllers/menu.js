var express = require('express');
var router = express.Router();

class MenuController {

    init(){
        router.get('/', this.get());
        return router;
    }


    get() {
        return (req, res, next) => {
            try {
                console.log('menu')
                res.render('menu', { title: 'menu', layout: 'layout' });
            } catch (error) {
                console.error(error)
            }
        }
    }
}

module.exports = new MenuController();