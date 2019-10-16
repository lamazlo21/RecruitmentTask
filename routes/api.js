const express = require('express');
const router = express.Router();
const Form = require('../models/data');



router.post('/',(req,res)=> {
    Form.findOne({email: req.body.email}, (err, obj)=>{
        // If email exists in the db, the form is rejected
        if(obj === null){
            Form.create(req.body).then(()=>{
                res.json({
                    data: "Form added to db!",
                    type: true
                });
            }).catch(err=>res.json({
                data: "Form cannot be added to db. All fields are required!",
                type: false
            }))}
        else
            res.json({
                data: "User with this email exists in db!",
                type: false
            })
    })
})

module.exports = router;