const creditService = require("../services/creditService")

async function getAllCustomers (req,res) {
    const customersRef = creditService.db.collection('customers');
    try{
        customersRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
            console.log(data);
            return res.status(201).json(data);
        })
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
    
}

async function createNewCustomer(req,res){
    const newClient = await creditService.db.collection('customers').add({
            name: 'frank',
            last_name: 'cappa',
            phone: '2542265600',
            email: 'frankcappa@gmail.com',
            address: 'av dorado 2'
        });
    
    console.log('Added document with ID: ', newClient.id);
    return res.status(200).json(newClient.id)
    //res.send(newClient);
}

async function getOneCustomer(req,res){

    try{
        const customer  = await creditService.db.collection('customers').doc('ppIhYvlAacBqmDw47PWX').get()
        console.log('Added document with ID: ', customer.data().name)
        return res.status(200).json( customer.data())
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }    
}

module.exports = {
    getAllCustomers,
    getOneCustomer,
    createNewCustomer
}