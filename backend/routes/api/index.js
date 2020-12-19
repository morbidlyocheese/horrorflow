const router = require('express').Router();

const sessionRouter = require('./session');
const userRouters = require('./users');
const questionsRouter = require('./questions');
const responseRouter = require('./response');
const voteRouter = require('./vote');
const spashRouter = require('./spashpage');

router.use('/session', sessionRouter);

router.use('/users', userRouters);

router.use('/questions', questionsRouter);

router.use('/responses', responseRouter);

router.use('/vote', voteRouter);

router.use('/splashpage', spashRouter);

module.exports = router;