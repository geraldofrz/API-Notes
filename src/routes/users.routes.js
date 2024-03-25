const { Router } = require('express');

const UsersControllers = require('../controllers/UsersControllers');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const userControllers = new UsersControllers();

usersRoutes.post('/', userControllers.create);
usersRoutes.put('/', ensureAuthenticated, userControllers.update);

module.exports = usersRoutes;