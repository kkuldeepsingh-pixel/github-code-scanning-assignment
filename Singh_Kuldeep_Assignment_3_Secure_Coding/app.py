import os
import sqlite3

def get_user(username):
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()

    query = "SELECT * FROM users WHERE username = '" + username + "'"
    cursor.execute(query)

    result = cursor.fetchone()
    conn.close()
    return result

def read_config():
    path = os.getenv("CONFIG_PATH", "config.txt")
    with open(path, "r") as f:
        return f.read()

if __name__ == "__main__":
    user = input("Enter username: ")
    print(get_user(user))

# trigger super-linter
