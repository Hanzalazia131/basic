const router = require('express').Router();

let Info = require('../Models/Info.model');



router.route('/').get((req, res) => {
    Info.find()
    .then(Infos => res.json(Infos))
    .catch(err => res.status(400).json('Error: ' + err))    
});

router.route('/add').post((req, res) => {
    const Name = req.body.Name;
    const CNIC = req.body.CNIC;
    const DOB = req.body.DOB;

    const newInfo = new Info({
        Name,
        CNIC,
        DOB,
    });
    newInfo.save()
    .then(()=> res.json('Info Added! ' + req.body.DOB + ' '))
    .catch(err => res.status(400).json('Error: ' + err))
});

// router.route('/Update').put('/api/stuff/:id', (req, res, next) => {
//     const thing = new Thing({
      
//     });
//     Thing.updateOne({_id: req.params.id}, thing).then(
//       () => {
//         res.status(201).json({message: 'Thing updated successfully!'});})
//         .catch((error) => {res.status(400).json({error: error});});
//   });

module.exports = router;