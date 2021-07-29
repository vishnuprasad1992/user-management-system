const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller")
const services = require('../services/render')

//page router
router.get('/',services.home);
router.get('/add-user',services.add_user);
router.get('/update-user',services.update_user);

//api router
router.post("/api/users",controller.create);
router.get("/api/users",controller.find);
router.put("/api/users/:id",controller.update);
router.delete("/api/users/:id",controller.delete);

module.exports= router;