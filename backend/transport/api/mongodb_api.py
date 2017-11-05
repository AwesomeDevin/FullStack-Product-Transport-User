import pymongo
from bson.objectid import ObjectId
import time
from mongodb_config import HOST,PORT
import datetime

class MongoAPI(object):
    def __init__(self):
        # print 'init mongo args...'
        # self.host = '127.0.0.1'
        self.host = HOST
        self.port = PORT
        self.db_name = 'transportUser'

    def connnect_db(self):
        client = pymongo.MongoClient(self.host, self.port)
        return client

    def use_db(self):
        client = self.connnect_db()
        mydb = client[self.db_name] # new a database
        return mydb

    def get_db(self):
        	db = self.use_db()
        	return db
        
    def use_table(self,db,table_name):
        	return db[table_name]

    def get_table(self,table_name):
    	db = self.get_db()
    	table = self.use_table(db,table_name)
    	return table

#######################################


class userAPI(MongoAPI):
    """docstring for TaskAPI"""
    def __init__(self):
        super(userAPI, self).__init__()
        self.table_name = 'transport_user_user'
        self.table = self.get_table(self.table_name)

    def add_user_info(self,info):
        self.table.insert(info)

    def update_user_info(self,_id,username,tel,sex,head_img):
        update_time = datetime.datetime.now()
        self.table.update({'_id':ObjectId(_id)},{'$set':{'username':username,'tel':tel,'sex':sex,'head_img':head_img}},True,False)
    def get_all_user_info(self):
        data = self.table.find().sort([('_id',pymongo.DESCENDING)])
        if data:
            return list(data)
        else:
            return []
    def get_user__info(self,tel):
        info = list(self.table.find({'tel':tel}))
        return info

    def remove_user_info(self,_id):
        self.table.remove({'_id':_id})

    def remove_all_task(self):
        self.table.drop()




class orderAPI(MongoAPI):
    """docstring for TaskAPI"""
    def __init__(self):
        super(orderAPI, self).__init__()
        self.table_name = 'transport_user_order'
        self.table = self.get_table(self.table_name)


    def add_order_info(self,info):
        print 'info',info
        r = self.table.insert(info)
        return r

    def update_order_info(self,_id,username,tel,sex,head_img):
        update_time = datetime.datetime.now()
        self.table.update({'_id':ObjectId(_id)},{'$set':{'username':username,}},True,False)
    def get_all_order_info(self,tel):
        data = self.table.find({'tel':tel}).sort([('_id',pymongo.DESCENDING)])
        if data:
            return list(data)
        else:
            return []
    # def get_order__info(self,tel):
    #     info = list(self.table.find({'tel':tel}))
    #     return info

    def remove_order_info(self,_id):
        self.table.remove({'_id':_id})

    def remove_all_task(self):
        self.table.drop()