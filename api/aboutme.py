import re
from flask import request
from flask import Blueprint
import hashlib
import psycopg2
import jwt
from database import connection
from api.validator import validate
api_aboutme = Blueprint('api_aboutme', __name__)
api_aboutenemy = Blueprint('api_aboutenemy', __name__)
from flask import request
SALT = b'iRlf_s4lt*'
regex_pattern = r'[^a-zA-Z0-9\s]'
email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
@api_aboutme.route('/api/v1/profile/self', methods=['GET', 'PATCH'])
def infome():
    if request.method == 'GET':
        if(validate()):
            token = jwt.decode(request.cookies.get('jwt'), SALT, algorithms="HS256")
            cursor = connection.cursor()
            cursor.execute('''
                SELECT * FROM users
                WHERE email = %s
            ''', (token['email'],))
            user = cursor.fetchone()
            cursor.close()
            print(str(user[2]))
            response = {'ID': user[0], 'Username': str(user[1]), 'Email': str(user[2]), 'isbanned': user[4],'refbalance': user[5],'refprocent': user[6], 'refusers': user[7]}
            if user:
                # Проверяем правильность пароля
                return response, 200
            else:
                return 'User not found', 404
            
        else:
            return 'Session lost',403
    if request.method == 'PATCH':
        if(validate()):
            token = jwt.decode(request.cookies.get('jwt'), SALT, algorithms="HS256")
            data = request.get_json()
            print(data)
            login = data.get('Username', '')
            #email = data.get('Email', '')
            try:
                refprocent = int(data.get('refprocent', ''))
            except:
                return 'Eblan', 500
            passwordold = data.get('passwordold', '')
            passwordnew = data.get('passwordnew', '')




            
            cursor = connection.cursor()
            cursor.execute('''
                SELECT * FROM users
                WHERE email = %s
            ''', (token['email'],))
            user = cursor.fetchone()
            cursor.close()
            hashed_password = hashlib.md5(passwordold.encode() + SALT).hexdigest()
            hashed_password2 = hashlib.md5(passwordnew.encode() + SALT).hexdigest()
            #print(hashed_password)
            matches = re.findall(regex_pattern, login)
            if ' ' in login:
                return 'Login or Email contain a special symbols', 400
            if len(matches) > 0:
                return 'Login contain a special symbols', 400

            if not login:
                return 'Login are required', 400

            if len(login) > 21:
                return 'Very long login', 400
            if hashed_password == user[3]:


                if hashed_password2 != user[3]:
                    cursor = connection.cursor()
                    cursor.execute('''
                    UPDATE users
                    SET login = %s, refprocent=%s, passwordold=%s, passwordnew=%s
                    WHERE email = %s;
                    ''', (login,email,refprocent,passwordold,passwordnew, token['email'],))
                    connection.commit()
                    cursor.close()
                    return 'dfasas'
                else:
                    return 'daun'
            elif passwordnew == '':
                cursor = connection.cursor()
                cursor.execute('''
                UPDATE users
                SET login = %s, refprocent=%s
                WHERE email = %s;
                ''', (login,refprocent, token['email'],))
                connection.commit()
                cursor.close()
                
                return 'sadfafsd'
                

    # Ищем пользователя по логину или email
@api_aboutenemy.route('/api/v1/profile/<int:id>', methods=['GET'])
def infome(id):
    if(validate()):
        token = jwt.decode(request.cookies.get('jwt'), SALT, algorithms="HS256")
        cursor = connection.cursor()
        cursor.execute('''
            SELECT * FROM users
            WHERE id = %s
        ''', (id,))
        user = cursor.fetchone()
        cursor.close()
        response = {'ID': user[0], 'Username': str(user[1]), 'isbanned': user[4]}
        if user:
            # Проверяем правильность пароля
            return response, 200
        else:
            return 'User not found', 404
        
    else:
        return 'Session lost',403
    # Ищем пользователя по логину или email
