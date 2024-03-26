const { Router, response } = require('express');
const multer = require("multer");
const uploadConfig = require("../config/upload");

const UsersControllers = require('../controllers/UsersControllers');
const UserAvatarControllers = require('../controllers/UserAvatarController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const userControllers = new UsersControllers();
const userAvatarControllers = new UserAvatarControllers;

usersRoutes.post('/', userControllers.create);
usersRoutes.put('/', ensureAuthenticated, userControllers.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarControllers.update);

module.exports = usersRoutes;