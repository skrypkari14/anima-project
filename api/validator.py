from flask import request
from flask import Blueprint
import hashlib
import psycopg2
from flask import request, redirect, make_response
from flask import Blueprint
import hashlib
import psycopg2
SALT = b'iRlf_s4lt*'
import jwt
import time
validator = Blueprint('validator', __name__)

def validate():
    print(1)
    if request.cookies.get('jwt'):
        print(2)
        try:
            token = jwt.decode(request.cookies.get('jwt'), SALT, algorithms="HS256")
            if int(token['tiCheEblan']) > int(time.time()):
                return True
            else:
                return False
        except:
            #encoded_jwt = jwt.encode({"email": ij}, SALT, algorithm="HS256")
            return False