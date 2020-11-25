const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();
const { Question, User, Response } = require('../../db/models');

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { questionId, userId, response } = req.body;

        const newResponse = await Response.create({
            questionId,
            userId,
            response
        });

        const question = await Question.findByPk(questionId, {
            include: [User, Response]
        });

        return res.json({
            question
        });
    }),
);

module.exports = router;