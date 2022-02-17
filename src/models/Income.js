const db = require('../utilDB/database');

module.exports = class Income{
    constructor(id,title,ammount,type){
        this.id = id;
        this.title = title;
        this.ammount = ammount;
        this.type = type;
    }
    static getIncome(clientID){
        return db.execute("SELECT * FROM INCOME WHERE clientID='" + clientID +"' ");
    }
    static addIncome(title,ammount,description,catagory){
        //THIS CAN BE EDITED ACCORDING TO PASSING INFO
        db.execute("INSERT INTO INCOME(TITLE,AMMOUNT,DESCRIPTION,CATAGORY) VALUES ('"+ title+ "','"+ ammount+ "','"+ description+ "','"+ catagory+ "')");
    }
}