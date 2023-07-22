const IndexController = require('../controllers/index')
const AboutController = require('../controllers/about')
const MenuController = require('../controllers/menu')
const NewsController = require('../controllers/news')
const ContactController = require('../controllers/contact')

class CustomRouter {
    constructor(app) {
        this.app = app;
        this.route();
    }

    route() {
        this.app.use('/', IndexController.init());
        this.app.use('/about', AboutController.init());
        this.app.use('/menu', MenuController.init());
        this.app.use('/news', NewsController.init());
        this.app.use('/contact', ContactController.init());
    }

    init() {
        return this.app
    }
}

module.exports = CustomRouter;