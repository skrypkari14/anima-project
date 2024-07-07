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
@api_register.route('/api/v1/validate', methods=['POST'])
def register():
    data = request.get_json()
    password = data.get('', '')