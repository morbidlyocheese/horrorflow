const router = require('express').Router();
const sessionRouter = require('./session');
const userRouters = require('./users');
const questionsRouter = require('./questions');

router.use('/session', sessionRouter);

router.use('/users', userRouters);

router.use('/questions', questionsRouter);

module.exports = router;