import pymongo


HOST = '127.0.0.1'
PORT = 27017


def connnect_db():
    client = pymongo.MongoClient(HOST, PORT)
    return client

def use_db(client,db_name):
    mydb = client[db_name] # new a database
    return mydb

def get_db(db_name):
	client=connnect_db()
    	db=use_db(client,db_name)
    	return db
    
def use_table(db,table_name):
    	return db[table_name]

def get_table(db_name,table_name):
	db = get_db(db_name)
	table = use_table(db,table_name)
	return table