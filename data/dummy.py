# https://www.w3schools.com/python/python_mysql_getstarted.asp
# python -m pip install mysql-connector-python
# pip install Faker
# export MYSQL_ROOT_PASS=""

from matplotlib.pyplot import title
import mysql.connector
import os
import datetime

from faker import Faker
fake = Faker()
Faker.seed(4321)



def add_client(mydb):
  print(mydb) 
  mycursor = mydb.cursor()

  sql = "INSERT INTO Client (Name, Email) VALUES (%s, %s)"
  val = (fake.name(), fake.email())
  mycursor.execute(sql, val)
  mydb.commit()
  print(mycursor.rowcount, "record inserted.")


def add_onetime_income(mydb):
  print(mydb) 
  mycursor = mydb.cursor()
  title = fake.text().split(" ")[0]
  desc = " ".join(fake.sentence().split(" ")[:5])
  amount = 1000
  time = datetime.datetime(2009, 5, 5)
  clientID = 6

  sql = "INSERT INTO Income (title, amount, description, clientID) VALUES (%s, %s, %s, %s)"
  val = (title, amount, desc, clientID)
  # print(title, desc, time)
  mycursor.execute(sql, val)
  mydb.commit()
  print(mycursor.rowcount, "record inserted.")
  
  incomeID = mycursor.lastrowid

  sql = "INSERT INTO oneTimeIncome (time, IncomeID, clientID) VALUES (%s, %s, %s)"
  val = (time, incomeID, clientID)
  # print(title, desc, time)
  mycursor.execute(sql, val)
  mydb.commit()
  print(mycursor.rowcount, "record inserted.")

  # print(mycursor.rowcount, "record inserted.")



mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  # export MYSQL_ROOT_PASS=""
  password=os.environ.get("MYSQL_ROOT_PASS", None),
  database="mydb"
)

# add_client(mydb)
add_onetime_income(mydb)




