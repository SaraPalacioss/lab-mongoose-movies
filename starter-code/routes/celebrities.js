const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');



// GET ALL CELEBRITIES LIST
router.get('/', (req, res, next) => {
    Celebrity.find({}, {name: 1})
    .then((celebrity) => {
      console.log(celebrity)
      res.render('./celebrities/index', {celebrity});
      
    })
    .catch((err) => {
      console.log(err)
      res.render('error')
    })
    
  })

router.get('/new', (req, res, next)=>{
  res.render('./celebrities/new');
});
  
router.post('/', (req, res, next)=>{
  const newCelebrity = {...req.body.name, ...req.body.ocupation, ...req.body.catchPhrase}
  Celebrity.create(newCelebrity)
      .then((result)=>{
          console.log(result);
          res.render('./celebrities', result);
          })
      .catch((err)=>console.log(err));
});



router.get('/:id', (req, res, next) =>{
    const id = req.params.id
    Celebrity.findById(id)
    .then((result)=>{
      res.render('./celebrities/show', result);
    })

    .catch((err)=> {
      console.log(err)
      res.render('error')
  })
})










  
module.exports = router;
