import express from 'express'

const router = express.Router();


router.get("/",(req,res,next)=>{
    res.json("Test Run Successfully done!!!!");
    console.log(
        "Waooo its work!!!"
    )
})

export default router;