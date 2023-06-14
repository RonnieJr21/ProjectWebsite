const express = require('express');
const router = express.Router();
router.use(express.json())
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const client = new MongoClient(process.env.DATABASE_URL);

const postDB = client.db();
const result = postDB.collection('posts')

let numPosts;
let posts = result.countDocuments({}, (err, count)=> {
    if (err) {
        return err
    } else {
        numPosts = count + 1;
        console.log(`posts stored in database: ${count}`)

        return numPosts

    }
})
console.log(numPosts)

const addPost = async (req, res, next) => {

    console.log(req.body)
    const post = {
        topic: req.body.topic,
        tags: req.body.tags,
        message: req.body.message,
    }

    try {
        await client.connect();
        await result.insertOne(post);


    }catch (e){
        return res.json({message: e})
    }
    console.log(`posts stored in database: ${numPosts}`)
    res.json(post)
    next();
}

const getPost = async (req, res, next)=>{
    try{
        const data = await result.find({}).toArray()
        console.log(data)
        return res.send([data])
    }catch (e){
        return res.json({message: e})
    }





}



router.get('/posts', getPost, (req, res, next)=>{
    console.log(req)
})

router.post('/add-post', addPost,(req, res)=>{

})

module.exports = router;
