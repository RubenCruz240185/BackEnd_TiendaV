const db = require('../models');

module.exports = function(modelName, searchableFields = []){
    const Model = db[modelName];
    if (!Model) {
        throw new Error(`Modelo ${modelName} no encontrado en db`);
    }

    return {
        create(req, res){
            return Model.create(req.body)
            .then(item => res.status(200).send(item))
            .catch(error => res.status(400).send(error));
        },
        list(_, res){
            return Model.findAll()
            .then(items => res.status(200).send(items))
            .catch(error => res.status(400).send(error));
        },
        find(req, res){
            const id = req.params.id;
            if (id) {
                return Model.findByPk(id)
                .then(item => {
                    if (!item) return res.status(404).send({message: `${modelName} no encontrada`});
                    return res.status(200).send(item);
                })
                .catch(error => res.status(400).send(error));
            }

            // Construir condición where a partir de campos buscables o query params
            const where = {};
            const queryKeys = Object.keys(req.query || {});
            const keysToCheck = searchableFields.length ? searchableFields : queryKeys;
            keysToCheck.forEach(k => {
                if (req.query[k] !== undefined) where[k] = req.query[k];
            });

            if (Object.keys(where).length) {
                return Model.findAll({ where })
                .then(items => res.status(200).send(items))
                .catch(error => res.status(400).send(error));
            }

            return res.status(400).send({message: 'Debe proporcionar id o parámetros de búsqueda'});
        },
        update(req, res){
            const id = req.params.id;
            return Model.findByPk(id)
            .then(item => {
                if (!item) return res.status(404).send({message: `${modelName} no encontrada`});
                return item.update(req.body)
                .then(updated => res.status(200).send(updated))
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
        },
        delete(req, res){
            return Model.destroy({ where: { id: req.params.id } })
            .then(() => res.status(200).send({message: 'Datos Eliminados'}))
            .catch(error => res.status(400).send(error));
        },
    };
};
