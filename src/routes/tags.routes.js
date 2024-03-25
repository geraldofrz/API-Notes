const { Router } = require('express');

const TagsControllers = require('../controllers/TagsController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsRoutes = Router();

const tagsControllers = new TagsControllers();

tagsRoutes.get('/', ensureAuthenticated, tagsControllers.index);

module.exports = tagsRoutes;