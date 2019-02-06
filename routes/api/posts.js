const express   =   require('express');

const router= express.Router();



//@route GET api/posts/test
// @desc  Tests all post routes
//access public
router.get('/test',(req,res) => res.json({msg :'posts Works'}));

module.exports = router;