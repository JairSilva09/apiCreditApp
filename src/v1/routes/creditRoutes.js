const express = require("express");
const router = express.Router();
const creditController = require("../../controllers/creditController")

router 
    .get('/',creditController.getAllClients);
router
    .post('/client',creditController.createNewClient);
      
router
    .get("/:clientId", creditController.getOneClient);     
      
// router
//     .patch("/:clienttId", (req, res) => {
//         res.send("Update an existing client");
//     });
      
// router
//     .delete("/:clientId", (req, res) => {
//         res.send("Delete an existing client");
//     });

module.exports = router