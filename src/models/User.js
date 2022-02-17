const db = require('../utilDB/database');
const income = require('../models/Income');

module.exports = class User{
    constructor(id,name,email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
    static getIncome(clientID){
        return db.execute("SELECT * FROM INCOME WHERE clientID='" + clientID +"' ");
    }
    static addNewIncome(income){
        //THIS CAN BE EDITED ACCORDING TO PASSING INFO
        //this.incomes.
        //db.execute("INSERT INTO INCOME(TITLE,AMMOUNT,DESCRIPTION,CATAGORY) VALUES ('"+ title+ "','"+ ammount+ "','"+ description+ "','"+ catagory+ "')");
    }
    static updateIncome(title,ammount){
        return income.editIncome(title,ammount,this.id);


    }
}