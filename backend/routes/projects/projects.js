const express = require('express');

const router = express.Router();


router.get('/projects', (req, res, next)=>{
    console.log('GET request in projects');
    console.log(req)
    res.json({
        message: 'Hello, from projects!',
        code: 201
    })
})

module.exports = router;