const express=require('express');
const router=express.Router();
const {getResponse}=require('../controllers/ai.controllers')

router.get("/get-response", getResponse)


module.exports=router;