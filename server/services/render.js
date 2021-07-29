const axios = require("axios");
const { response } = require("express");

exports.home = async (req,res)=>{
    await axios.get("http://localhost:3000/api/users")
    .then(response=>{
        // console.log(response.data);
        res.render("index",{users:response.data});
    })
    .catch(err =>
        {
            console.log(err)
        })
}

exports.add_user = (req,res)=>{
    res.render("add_user");
}

exports.update_user = (req,res)=>{
    axios.get("http://localhost:3000/api/users",{params:{id:req.query.id}})
    .then((response)=>res.render("update_user",{user:response.data}))
    .catch(err=>{
        console.log(err);
    }) 
} 