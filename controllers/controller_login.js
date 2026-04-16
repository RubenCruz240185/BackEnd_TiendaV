const jwt = require('jsonwebtoken');
const db = require('../models');

const JWT_SECRET = process.env.JWT_SECRET || 'dev_jwt_secret_change_me';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '2h';

module.exports = {
    async login(req, res) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).send({
                    message: 'Email y password son obligatorios'
                });
            }

            const usuario = await db.tbc_usuario.findOne({
                where: { email }
            });

            if (!usuario || usuario.password !== password) {
                return res.status(401).send({
                    message: 'Credenciales inválidas'
                });
            }

            const payload = {
                id: usuario.id,
                email: usuario.email,
                rol: usuario.rol,
                nombre: usuario.nombre
            };

            const token = jwt.sign(payload, JWT_SECRET, {
                expiresIn: JWT_EXPIRES_IN
            });

            return res.status(200).send({
                message: 'Login exitoso',
                token,
                usuario: {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    email: usuario.email,
                    rol: usuario.rol
                }
            });
        } catch (error) {
            return res.status(500).send({
                message: 'Error al realizar login',
                error: error.message
            });
        }
    }
};