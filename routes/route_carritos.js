const carritosController = require('../controllers/controller_carritos');

module.exports = (app) => {
    app.get('/api/carritos', carritosController.list);
    app.get('/api/carritos/:id', carritosController.find);
    app.post('/api/carritos', carritosController.create);
    app.delete('/api/carritos/:id', carritosController.delete);
    app.put('/api/carritos/:id', carritosController.update);
}
