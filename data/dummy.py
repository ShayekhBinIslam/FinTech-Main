# https://www.w3schools.com/python/python_mysql_getstarted.asp
# python -m pip install mysql-connector-python
# pip install Faker
# export MYSQL_ROOT_PASS=""

from matplotlib.pyplot import title
import mysql.connector
import os
import datetime
import random

from faker import Faker
fake = Faker()
Faker.seed(4321)



def add_client(mydb):
  print(mydb)
  mycursor = mydb.cursor()
  passhash = 134546353

  sql = "INSERT INTO Client (Name, Email, passhash) VALUES (%s, %s, %s)"
  val = (fake.name(), fake.email(), passhash)
  mycursor.execute(sql, val)
  mydb.commit()
  print(mycursor.rowcount, "record inserted.")


def add_onetime_income(mydb):
  print(mydb) 
  mycursor = mydb.cursor()

  # for year in range(2016, 2021 + 1):
    # for month in range(1, 12 + 1):
  
  clientID = 1
  for i in range(50):
    title = fake.text().split(" ")[0]
    desc = " ".join(fake.sentence().split(" ")[:5])
    # amount = 1000
    # time = datetime.datetime(2009, 5, 5)
    amount = random.randint(1000, 1000000)
    # time = datetime.datetime(random.randint(2016, 2021), random.randint(1, 12), random.randint())
    time = fake.date_between_dates(datetime.datetime(2016, 1, 1), datetime.datetime(2022, 1, 31))


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
  
  for i in range(50):
    title = fake.text().split(" ")[0]
    desc = " ".join(fake.sentence().split(" ")[:5])
    # amount = 1000
    # time = datetime.datetime(2009, 5, 5)
    amount = random.randint(1000, 1000000)
    # time = datetime.datetime(random.randint(2016, 2021), random.randint(1, 12), random.randint())


    sql = "INSERT INTO Income (title, amount, description, clientID) VALUES (%s, %s, %s, %s)"
    val = (title, amount, desc, clientID)
    # print(title, desc, time)
    mycursor.execute(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "record inserted.")
    
    incomeID = mycursor.lastrowid

    period = datetime.datetime
    start_time = fake.date_between_dates(datetime.datetime(2016, 1, 1), datetime.datetime(2022, 1, 31))
    end_time = fake.date_between_dates(start_time, datetime.datetime(2022, 1, 31))


    sql = "INSERT INTO periodicIncome (time, IncomeID, clientID) VALUES (%s, %s, %s)"
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

add_client(mydb)
add_onetime_income(mydb)




