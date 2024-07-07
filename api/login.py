from flask import request, redirect, make_response, jsonify, Blueprint
import hashlib
import psycopg2
from database import connection
import jwt
import time

api_login = Blueprint('api_login', __name__)

SALT = b'iRlf_s4lt*'
regex_pattern = r'[^a-zA-Z0-9\s]'
email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

@api_login.route('/api/v1/login', methods=['POST'])
def login():
    data = request.get_json()

    login_or_email = data.get('login', '')
    password = data.get('password', '')

    if request.cookies.get('jwt'):
        try:
            token = jwt.decode(request.cookies.get('jwt'), SALT, algorithms=["HS256"])
            if int(token.get('tiCheEblan', 0)) > int(time.time()):
                response = redirect('/profile')
                resp = make_response(response)
                return resp
        except jwt.ExpiredSignatureError:
            pass
        except jwt.InvalidTokenError:
            pass

    if not login_or_email or not password:
        return jsonify({"status":0, "error": "Login/email and password are required"}), 400
    elif len(password) > 128 or len(login_or_email) > 128:
        return jsonify({"status":0, "error": "Very long email or login"}), 400

    cursor = connection.cursor()
    cursor.execute('''
        SELECT * FROM users
        WHERE login = %s OR email = %s
    ''', (login_or_email, login_or_email))
    
    user = cursor.fetchone()
    cursor.close()

    if user:
        hashed_password = hashlib.md5((password.encode() + SALT)).hexdigest()
        if hashed_password == user[3]:
            if '@' in login_or_email:
                encoded_jwt = jwt.encode({"email": login_or_email, "tiCheEblan": int(time.time()) + 43200}, SALT, algorithm="HS256")
                response = redirect('/profile')
                resp = make_response(response)
                resp.set_cookie('jwt', encoded_jwt)
                return resp
            else:
                for email in user:
                    if '@' in str(email):
                        encoded_jwt = jwt.encode({"email": email, "tiCheEblan": int(time.time()) + 43200}, SALT, algorithm="HS256")
                        response = redirect('/profile')
                        resp = make_response(response)
                        resp.set_cookie('jwt', encoded_jwt.decode('utf-8'))
                        return resp
        else:
            return jsonify({"status":0, "error": "Incorrect password"}), 401
    else:
        return jsonify({"status":0, "error": "User not found"}), 404
