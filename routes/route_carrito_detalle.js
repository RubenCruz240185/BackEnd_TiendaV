const detalleController = require('../controllers/controller_carrito_detalle');

module.exports = (app) => {
    app.get('/api/carrito_detalle', detalleController.list);
    app.get('/api/carrito_detalle/:id', detalleController.find);
    app.post('/api/carrito_detalle', detalleController.create);
    app.delete('/api/carrito_detalle/:id', detalleController.delete);
    app.put('/api/carrito_detalle/:id', detalleController.update);
}
