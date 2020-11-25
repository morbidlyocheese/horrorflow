const router = require('express').Router();
const sessionRouter = require('./session');
const userRouters = require('./users');
const questionsRouter = require('./questions');

router.use('/session', sessionRouter);

router.use('/users', userRouters);

router.use('/questions', questionsRouter);

router.use('/questions/:id', questionsRouter);

module.exports = router;