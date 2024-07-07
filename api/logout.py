from flask import request, redirect, make_response
from flask import Blueprint
import hashlib
import psycopg2
from database import connection
import jwt
import time
api_logoute = Blueprint('api_logoute', __name__)

SALT = b'iRlf_s4lt*'
regex_pattern = r'[^a-zA-Z0-9\s]'
email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
#print(encoded_jwt)
#jwt.decode(encoded_jwt, "secret", algorithms=["HS256"])
@api_logoute.route('/api/v1/logout')
def logoute():
    response = redirect('/')
    resp = make_response(response)
    resp.set_cookie('jwt', 'nope')
    return resp
