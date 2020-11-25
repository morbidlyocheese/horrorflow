const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();
const { Question, User, Response } = require('../../db/models');

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { question, userId, response } = req.body;

        const newResponse = await Response.create({
            question,
            userId,
            response
        });

        return res.json({
            response: newResponse,
        });
    }),
);

module.exports = router;