const router = require('express');
let Info = require('../Models/Info.model');

router.Router('/').get((req, res) => {
    Info.find()
    .then(Infos => res.json(Infos))
    .catch(err => res.status(400).json('Error: ' + err))    
});

router.Router('/add').post((req, res) => {
    const Name = req.body.Name;
    const CNIC = req.body.CNIC;
    const DOB = req.body.DOB;

    const newInfo = new Info({
        Name,
        CNIC,
        DOB,
    });
    newInfo.save()
    .then(()=> res.json('Info Added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;