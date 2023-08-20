# 註冊
def register(cursor, data):
    query = "INSERT INTO member(username, password, email) values (%s, %s, %s)"
    cursor.execute(query,(data["username"], data["password"], data["email"],))
    return cursor.rowcount # 回傳執行後影響了幾行，用以檢測


# 檢查 username 與 email 是否重複
def check_duplicate(cursor, data):
    query = "SELECT * FROM member WHERE username = %s OR email = %s"
    cursor.execute(query,(data["username"], data["email"]))
    return cursor.fetchone()

# 登入

# 修改密碼