const express = require('express');
const router = express.Router();
const ideasController = require('../controller/ideasController');

router.get('/', ideasController.getAllIdeas);
router.get('/:id', ideasController.getIdeaById);
router.post('/', ideasController.createIdea);
router.get('/category/:category', ideasController.getIdeasByCategory);
router.put('/:id', ideasController.updateIdeaStatus);
router.delete('/:id', ideasController.deleteIdea);

module.exports = router;
