const { Post } = require('../models');

const postdata = [
    {
        title: 'Object-Relational Mapping',
        // post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        user_id: 10
    },
    {
        title: 'Authentication vs. Authorization',
        // post_url: 'https://nasa.gov/donec.json',
        user_id: 8
    },
    {
        title: 'Why MVC is so important',
        // post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;