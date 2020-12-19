const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();
const { Question, User, Response } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
    return res.json();
}));

module.exports = router;