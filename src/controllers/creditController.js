const creditService = require("../services/creditService")

const getAllClients = (req,res) =>{
    const allClients = creditService.getAllClients();
    res.send("Get all clients")
}

const getOneClient = (req,res) =>{
    
    const oneClient = creditService.getOneClient()
    res.send("Get and existent client")
}

const createNewClient = (req, res) => {

    const newClient = creditService.createNewClient();
    res.send("Create a new client");
}

module.exports = {
    getAllClients,
    getOneClient,
    createNewClient
}