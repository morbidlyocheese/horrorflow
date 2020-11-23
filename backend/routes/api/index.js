const router = require('express').Router();
const sessionRouter = require('./session');
const userRouters = require('./users');

router.use('/session', sessionRouter);

router.use('/users', userRouters);

module.exports = router;