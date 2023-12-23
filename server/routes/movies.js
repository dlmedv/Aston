const router = require('express').Router();
const movieControllers = require('../controllers/movies');
const { validateCreateMovie } = require('../middlewares/validations');

router.get('/', movieControllers.getAllMovies);
router.post('/', validateCreateMovie, movieControllers.createMovie);
router.delete('/:id', movieControllers.deleteMovie);

module.exports = router;
