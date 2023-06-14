const express = require('express');

const router = express.Router();

router.get('/expense-tracker', (req, res, next)=>{
    console.log('GET request in expense tracker');
    console.log(req)
    res.json({
        message: 'Hello, from expense tracker!',
        code: 201
    })
})

module.exports = router;