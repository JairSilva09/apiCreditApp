// const creditApp = require("../util/firebase")
// const creditDb = require("firebase/firestore/lite")

// const database = creditDb.getFirestore(creditApp.app)

// function getCustomers(){
//     const dataCustomers = creditApp.getCustomers(database)
//     console.log(dataCustomers)
//     return dataCustomers
// }



// module.exports = { getCustomers};

const creditApp = require("../util/admin");

async function getCustomers(req, res) {
    const customersRef = creditApp.db.collection('customers');
    try{
        customersRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
            console.log(data);
            return data
        })
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
};

module.exports = {
    getCustomers
}