const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'I have really loved learning about ORMs. It’s really simplified the way I create queries in SQL!',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;