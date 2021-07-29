const users = require('../models/models');

exports.create = (req,res)=>{
    if(!req.body){
        res.status(500).send("error");
    }
    else{
        const user = new users({
            name : req.body.name,
            email : req.body.email,
            gender : req.body.gender,
            status: req.body.status
        });  
        user
        .save(user)
        .then(data=>res.redirect("/"))
        .catch(err =>{
            res.status(500).send({
                message: err.message || 'Something went wrong'
            })
        })
    }
}

exports.find = (req,res)=>{
    if(req.query.id){
        users.findById(req.query.id)
        .then(data=> res.send(data))
        .catch(err=>{
            res.status(500).send({
                message:err.message || "some thing went wrong"
            });
        });
    }
    users.find()
    .then(data => res.send(data))
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Something went wrong'
        })
    })
    
}

exports.update = (req,res)=>{
    if(!req.body){
       return res.status(400).send({
           message: "sorry! data to be updated cannot be empty"
       })
    }
    else
    {
        let id=req.params.id;
        users.findByIdAndUpdate(id,req.body,{ useFindAndModify:false})
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message:"something went wrong please try after sometime"
        }));
    }
    
}

exports.delete = (req,res)=>{
    const id=req.params.id;
    users.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({
                message:`specified id is not found` 
            })
        }
        else{
            res.send({
                message:`data deleted successfully`
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:`cannot delete the data,please try again later`
        })
    })
    
}