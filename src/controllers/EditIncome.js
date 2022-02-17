const income = require("../models/Income");

exports.showIncome(clientID) = async(req,res,next) =>{
    try {
        const [allIncome] = await income.getIncome(clientID);
        res.status(200).json(allIncome); 
        
    } catch(err) {
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};