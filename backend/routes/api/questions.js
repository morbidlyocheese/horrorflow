const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();
const { Question } = require('../../db/models');

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { question, userId } = req.body;

        const newQuestion = await Question.create({
            question,
            userId
        });

        return res.json({
            question: newQuestion,
        });
    }),
);

router.get(
    '/questions',
    asyncHandler(async (req, res) => {
        const { question, userId, rating } = req.body;

        const questionList = await Question.findAll({
            question
        });

        return res.json({
            question: displayQuestions,
        });
    }),
);


module.exports = router;