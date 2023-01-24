const router = require('express').Router();

let Info = require('../Models/Info.model');


//Get All
router.route('/').get((req, res) => {
    Info.find()
    .then(Infos => res.json(Infos))
    .catch(err => res.status(400).json('Error: ' + err))    
});
//Create new
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
//Get by Id
router.route('/:id').get((req, res) => {
    Info.findById(req.params.id)
    .then(Info => res.json(Info))
    .catch(err => res.status(400).json('Error: ' + err))
});
//delete one
router.route('/delete/:id').delete((req,res) => {
    Info.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item Deleted'))
    .catch(err => res.status(400).json('Error: ' + err))
});
//Update one
router.route('/update/:id').post((req,res) => {
    Info.findById(req.params.id)
    .then(Info => {
        if(req.body.Name){
            Info.Name = req.body.Name;
        }
        if(req.body.CNIC){
            Info.CNIC = req.body.CNIC;
        }
        if(req.body.DOB){
            Info.DOB = req.body.DOB;
        }
        Info.save()
        .then(() => res.json('Item Updated'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
});




module.exports = router;