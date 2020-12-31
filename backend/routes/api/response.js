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
            include: [{ model: User }, { model: Response, include: [User] }]
        });

        return res.json({
            question
        });
    }),
);

router.delete(
    '/',
    asyncHandler(async (req, res) => {
        console.log(req.body, '<-- req')
        const response = await Response.findByPk(req.body.responseId, {
            include: [{ model: User, include: [Question] }]
        });
        
        await response.destroy();
        
        const question = await Question.findByPk(req.body.questionId, {
            include: [{ model: User }, { model: Response, include: [User] }]
        });

        console.log(question, '<-- question find')
        res.json({ question });
    })
);

module.exports = router;