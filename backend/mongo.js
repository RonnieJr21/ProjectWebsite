const MongoClient = require('mongodb').MongoClient
require('dotenv').config
const addPost = async (req, res) =>{
    console.log(req.body)
    const post = {
        // topic: req.body.topic,
        // tags: req.body.tags,
        // message: req.body.message,
    }
    const client = new MongoClient(process.env.DB_URL);

    try {
        await client.connect();
        const postDB = client.db();
        const result = postDB.collection('posts').insertOne(post);
    }catch (e){
        return res.json({message: e})
    }

    res.json(post)

}

const getPost = async (req, res, next) => {

}
exports.addPost = addPost;
exports.getPost = getPost;