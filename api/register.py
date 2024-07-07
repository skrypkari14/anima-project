from flask import request, Blueprint, redirect, make_response, jsonify
import hashlib
import psycopg2
from database import connection
from markupsafe import escape
import jwt
import time
import re
import json
api_register = Blueprint('api_register', __name__)
import os
SALT = 'iRlf_s4lt*'
regex_pattern = r'[^a-zA-Z0-9\s]'
email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
categories = {
    "Main": {
        "Settings": {"Name": "Default"}
    },
    "Legit": {
        "HitSound": {"enabled": False},
        "HitBox": {"enabled": False, "size": "default"},
        "Attack": {"enabled": False, "neural": False},
        "EzCombo": {"enabled": False},
        "ShiftTab": {"enabled": False},
        "NoHack!": {"enabled": False, "auto_report": False},
        "EveryHit": {"enabled": False},
        "FriendsLove": {"enabled": False},
        "WTap": {"enabled": False}
    },
    "Combat": {
        "KillAura": {"enabled": False, "range": "default", "crits_only": False},
        "EveryHit": {"enabled": False},
        "AimAssist": {"enabled": False}
    },
    "Visual": {
        "ESP": {"enabled": False},
        "CHAMS": {"enabled": False},
        "F3Buse": {"enabled": False},
        "Bright": {"enabled": False},
        "NoGui": {"enabled": False},
        "Logotype": {"enabled": False},
        "Keystrokes": {"enabled": False},
        "FPS-Counter": {"enabled": False},
        "Particles": {"enabled": False}
    },
    "Player": {
        "Disabler": {"enabled": False},
        "MidClick": {"enabled": False},
        "Sprint": {"enabled": False},
        "NearFree": {"enabled": False},
        "Respawn": {"enabled": False},
        "Leave": {"enabled": False}
    },
    "Detect": {
        "Forge2Optifine": {"enabled": False},
        "LegitMod": {"enabled": False},
        "AutoOFF": {"enabled": False}
    },
    "Premium": {
        "Optimizer": {"enabled": False},
        "NoHits": {"enabled": False}
    }
}
@api_register.route('/api/v1/register', methods=['POST'])
def register():
    data = request.get_json()

    if not data:
        return jsonify({"status": "0", "error": "No data provided"}), 400

    login = str(data.get('login', ''))
    email = str(data.get('email', ''))
    password = str(data.get('password', ''))

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

    if ' ' in login or ' ' in email:
        return jsonify({"status":0, "error": "Login or Email contain a special symbols"}), 400

    matches = re.findall(regex_pattern, login)
    matches2 = re.findall(email_pattern, email)
    if len(matches) > 0 or len(matches2) < 1:
        return jsonify({"status":0, "error": "Login or Email contain a special symbols"}), 400

    if not login or not email or not password:
        return jsonify({"status":0, "error": "Login, email and password are required"}), 400

    if len(login) > 20 or len(email) > 128:
        return jsonify({"status":0, "error": "Very long email or login"}), 400

    try:
        cursor = connection.cursor()
        cursor.execute('SELECT * FROM users WHERE login = %s', (login,))
        if cursor.fetchone():
            cursor.close()
            return jsonify({"status":0, "error": "Login already exists"}), 400
        print(password)
        hashed_password = hashlib.md5((password + SALT).encode()).hexdigest()

        cursor.execute('''
            INSERT INTO users (login, email, password)
            VALUES (%s, %s, %s)
        ''', (login, email, hashed_password))
        connection.commit()
        cursor.close()

        unix_time = int(time.time())
        encoded_jwt = jwt.encode({"email": email, "tiCheEblan": unix_time + 43200}, SALT, algorithm="HS256")
        response = redirect('/profile')
        cursor = connection.cursor()
        cursor.execute('SELECT * FROM users WHERE email = %s', (email,))
        id = cursor.fetchone()[0]
        cursor.close()
            # Создаем новый файл с конфигом
        os.mkdir(f'./configs/{id}')
        filename = f'./configs/{id}/1.json'
        with open(filename, "w") as write_file:
            json.dump(categories, write_file)
        resp = make_response(response)
        resp.set_cookie('jwt', encoded_jwt.decode('utf-8'))
        return resp
    except psycopg2.Error as e:
        connection.rollback()  
        return jsonify({"status":0, "error": "This email alredy exist"}), 500
