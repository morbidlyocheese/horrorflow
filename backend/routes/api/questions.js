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
    '/',
    asyncHandler(async (req, res) => {
        const questionList = await Question.findAll();

        return res.json({
            questions: questionList
        });
    }),
);


module.exports = router;