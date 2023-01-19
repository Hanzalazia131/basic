const router = require('express').Router();
let Info = require('../Models/Info.model');



router.route('/').get((req, res) => {
    Info.find()
    .then(Infos => res.json(Infos))
    .catch(err => res.status(400).json('Error: ' + err))    
});

router.route('/add').post((req, res) => {
    const Name = req.Name;
    const CNIC = req.CNIC;
    const DOB = req.DOB;

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