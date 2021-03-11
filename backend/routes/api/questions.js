const { response } = require('express');
const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();
const { Question, User, Response } = require('../../db/models');

// create new question
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

// all questions (home page)
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

// single question with responses
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

// delete question with responses
router.delete(
    '/',
    asyncHandler(async (req, res) => {
        const question = await Question.findByPk(req.body.questionId, {
            include: [{ 
                model: Response, include: [User] }]
        });

        const responses = await Response.findAll({
            where: {
                questionId: question.id
            }
        })

        if (responses) {
            await Response.destroy({
            where: {
                questionId: question.id
            }
            });
        }
        await question.destroy();

        res.json('Delete completed.');
   })
);

module.exports = router;