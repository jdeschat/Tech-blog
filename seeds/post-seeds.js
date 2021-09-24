const { Post } = require('../models');

const postdata = [
    {
        title: 'Object-Relational Mapping',
        description: 'hey there',
        // post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        user_id: 1
    },
    {
        title: 'Authentication vs. Authorization',
        // post_url: 'https://nasa.gov/donec.json',
        description: 'hey there',
        user_id: 2
    },
    {
        title: 'Why MVC is so important',
        description: 'hey there',
        // post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;