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
        console.log(responseId, '--------')

        // const userId = res.locals.user.dataValues.id;

        const response = await Response.findByPk(responseId, {
            include: [{ model: Response, include: [User] }]
        });

        console.log(response.userId, '~~~~~~~~~')

        if (response.userId !== req.body.userId) {
            window.alert('You are deleting your response!');
            return res.status(500).json({ code: 500, message: 'There was an error deleting the response.' });
        } else {
            response.destroy();
            res.status(200).json({ code: 200, message: 'Response deleted successfully.' });
        }
    })
);

module.exports = router;