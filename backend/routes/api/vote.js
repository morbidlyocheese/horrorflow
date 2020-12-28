const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();
const { Question, User, Response } = require('../../db/models');

router.put(
    '/',
    asyncHandler(async (req, res) => {
        const { questionId, responseId, rating } = req.body;

        await Response.update(
            { rating },
            { where: {
                id: responseId
                } 
            }
        );

        // const question = await Question.findByPk(questionId, {
        //     include: [{ 
        //         model: User 
        //     }, 
        //     {
        //         model: Response,
        //         order: [
        //             rating, "DESC"
        //         ],
        //         include: [User],
        //     }]
        // });

        const question = await Question.findByPk(questionId, {
            include: [{
                model: User
            },{
                model: Response,
                order: [[ 'rating', 'ASC' ]],
                include: [User],
            }]
        });

        res.json({
            question
        });
    }),
);

module.exports = router;