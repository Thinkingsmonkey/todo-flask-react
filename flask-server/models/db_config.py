import mysql.connector
import mysql.connector.pooling


db_config = {
    "user": "root",
    "password": "12345678",
    "host": "localhost",
    "database": "todo",
    "pool_size": 5,  # 設置連接池大小
}
db_pool = mysql.connector.pooling.MySQLConnectionPool(**db_config)