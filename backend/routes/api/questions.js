const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();
const { Question } = require('../../db/models');

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { question, userId } = req.body;

        console.log(question, userId);

        const newQuestion = await Question.create({
            question,
            userId
        });

        return res.json({
            question: newQuestion,
        });
    }),
);


module.exports = router;