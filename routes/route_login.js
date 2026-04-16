const loginController = require('../controllers/controller_login');

module.exports = (app) => {
    app.post('/api/login', loginController.login);
};