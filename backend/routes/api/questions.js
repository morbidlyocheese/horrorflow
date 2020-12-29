const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();
const { Question, User, Response } = require('../../db/models');

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
        const questionList = await Question.findAll({
            include: User
        });

        return res.json({
            questions: questionList
        });
    }),
);

router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const questionId = parseInt(req.params.id);
        const question = await Question.findByPk(questionId, {
            include: [{ model: User }, { model: Response, include: [User] }]
        });

        return res.json({
            question
        })
    })
);

router.post(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const userId = res.locals.user.dataValues.id;
        const questionId = parseInt(req.params.id, 10);

        const question = await Question.findOne({
            where: {
                questionId: questionId,
                userId: userId
            }
        })
    })
)

router.delete(
    '/',
    asyncHandler(async (req, res) => {
        console.log(req.body.questionId, '--------')

        // const userId = res.locals.user.dataValues.id;

        const question = await Question.findByPk(req.body.questionId, {
            include: [{ model: Response, include: [User] }]
        });

        console.log(question.userId, '~~~~~~~~~')

        if (question.userId !== req.body.userId) {
            
            return res.status(500).json({ code: 500, message: 'There was an error deleting the question.' });
        } else {
            question.destroy();
            res.status(200).json({ code: 200, message: 'Question deleted successfully.' });
        }
   })
);

module.exports = router;