from flask import request, Blueprint, redirect, make_response
import hashlib
import psycopg2
from database import connection
from markupsafe import escape
import jwt
import time
import os
import fnmatch
api_configs = Blueprint('api_configs', __name__)
api_configsview = Blueprint('api_configsview', __name__)
api_configshare = Blueprint('api_configshare', __name__)
config_activate = Blueprint('config_activate', __name__)
import time
from api.validator import validate
# Получение текущего времени в формате Unix
import json
SALT = b'iRlf_s4lt*'
import re
from flask import jsonify
regex_pattern = r'[^a-zA-Z0-9\s]'
email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
import base64
import shutil
import random
import hashlib
categories = {
    "Main": {
        "Settings": {"Name": "Default"},
        "Shared_for": {"Count": 5}
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






@api_configsview.route('/api/profile/configs/<int:ID>',methods=['GET','DELETE','PUT'])
def view_conf(ID):
    if(validate()):
        if request.method == 'GET':
            token = jwt.decode(request.cookies.get('jwt'), SALT, algorithms="HS256")
            cursor = connection.cursor()
            cursor.execute('SELECT * FROM users WHERE email = %s', (token['email'],))
            id = cursor.fetchone()[0]
            try:
                with open('./configs/'+str(int(id))+'/'+str(int(ID))+'.json') as filee:
                    lines = filee.readline()
                print(lines)

                return make_response(jsonify(json.loads(lines)), 200)
            except:
                return 'note existed', 404
            







        if request.method == 'PUT':
            data = request.get_json()
            Config_content = data.get('content', '')
            
            # Декодируем токен для получения идентификатора пользователя
            token = jwt.decode(request.cookies.get('jwt'), SALT, algorithms="HS256")
            cursor = connection.cursor()
            cursor.execute('SELECT * FROM users WHERE email = %s', (token['email'],))
            id = cursor.fetchone()[0]
            Config_content = base64.b64decode(Config_content).decode('utf-8')
            
            try:
                
                config_json = json.loads(Config_content.replace('\'', '"'))
            except json.JSONDecodeError:
                return 'Invalid JSON format for config content'
            print(config_json)
            if is_valid_config(config_json):
                if os.path.exists(f'./configs/{id}/{ID}.json'):
                # Создаем новый файл с конфигом
                    filename = f'./configs/{id}/{ID}.json'
                    with open(filename, "w") as write_file:
                        json.dump(config_json, write_file)

                    return 'ok'
                else:
                    return 'doent exist'
            else:
                return 'Invalid config content'
        if request.method == 'DELETE':
            token = jwt.decode(request.cookies.get('jwt'), SALT, algorithms="HS256")
            cursor = connection.cursor()
            cursor.execute('SELECT * FROM users WHERE email = %s', (token['email'],))
            #print(1)
            #print(cursor.fetchone()[0])
            id = cursor.fetchone()[0]
            #print(id)
            files_with_prefix = []
            prefix = str(id)
            numbers=[]
            
            #print(prefix + '_')
      
            #print(id)
            os.remove(('./configs/'+str(int(id))+'/'+str(int(ID))+'.json'))
            directory = f'./configs/{str(id)}'
            files = [f for f in os.listdir(directory) if f.endswith('.json')]
            files.sort()

            for i, filename in enumerate(files):
                new_filename = f"{i + 1}.json"
                old_path = os.path.join(directory, filename)
                new_path = os.path.join(directory, new_filename)
        
                if old_path != new_path:
                    os.rename(old_path, new_path)
                    #print(f"Renamed {old_path} to {new_path}")


            #print(2)
            return make_response('Removed', 200)


@api_configs.route('/api/profile/configs',methods=['GET', 'POST'])
def configs():
    if(validate()):
        if request.method == 'GET':
            token = jwt.decode(request.cookies.get('jwt'), SALT, algorithms="HS256")
            cursor = connection.cursor()
            cursor.execute('SELECT * FROM users WHERE email = %s', (token['email'],))
            #print(1)
            #print(cursor.fetchone()[0])
            id = cursor.fetchone()[0]
            #print(id)
            files_with_prefix = []
            prefix = str(id)
            numbers=[]
            
            #print(prefix + '_')
            for file in os.listdir(f'./configs/{str(id)}'):
                if file.endswith('.json'):
                    a = file.replace('.json','')
                    #print(a)
                    numbers.append(int(a))
            print(sorted(numbers)[-1])
                    #files_with_prefix.append(os.path.join('./configs', file))
            resp = {"count": len(numbers), "configs": []}
            test = json.loads(json.dumps(resp))
            for i in sorted(numbers):
                
                test['configs'].append(i)
                print(test)
            #print(files_with_prefix)


            #print(2)
            return test, 200
        if request.method == 'POST':
            data = request.get_json()
            #Config_content = data.get('content', '')
            
            # Декодируем токен для получения идентификатора пользователя
            token = jwt.decode(request.cookies.get('jwt'), SALT, algorithms="HS256")
            cursor = connection.cursor()
            cursor.execute('SELECT * FROM users WHERE email = %s', (token['email'],))
            id = cursor.fetchone()[0]
            # Получаем номер последнего конфига пользователя
            files_with_prefix = []
            prefix = str(id)
            numbers = []
            for file in os.listdir(f'./configs/{str(id)}'):
                if file.endswith('.json'):
                    a = file.replace('.json', '')
                    numbers.append(int(a))
            if len(numbers) > 9:
                return 'bad', 400
            latest_config_number = max(numbers) if numbers else 0

            # Создаем новый файл с конфигом
            filename = f'./configs/{id}/{latest_config_number + 1}.json'
            with open(filename, "w") as write_file:
                json.dump(categories, write_file)

            return 'ok'

    else:
        return 'Unauthorized', 403



def is_valid_config(config):
    # Проверка, что переданный конфиг соответствует категориям
    for category, subcategories in categories.items():
        if category not in config:
            return False  # Если категория отсутствует в конфиге, вернуть False
        for subcategory, attributes in subcategories.items():
            if subcategory not in config[category]:
                return False  # Если подкатегория отсутствует в конфиге, вернуть False
            if not isinstance(config[category][subcategory], dict):
                return False  # Подкатегория должна быть словарем
            for attr_name, attr_type in attributes.items():
                if attr_name not in config[category][subcategory]:
                    return False  # Если атрибут отсутствует в подкатегории, вернуть False
                if not isinstance(config[category][subcategory][attr_name], type(attr_type)):
                    return False  # Проверить тип значения
            # Проверка на наличие несуществующих функций
            for attr_name in config[category][subcategory]:
                if attr_name not in attributes:
                    return False  # Если атрибут не существует в словаре категорий, вернуть False
    # Проверка на наличие несуществующих подкатегорий и категорий
    for category in config:
        if category not in categories:
            return False  # Если категория не существует в словаре категорий, вернуть False
        for subcategory in config[category]:
            if subcategory not in categories[category]:
                return False  # Если подкатегория не существует в словаре категорий, вернуть False
    return True





users_cfg=[]

@api_configshare.route('/api/profile/share/<int:ID1>', methods=['POST'])
def config_share(ID1):
    if validate():
        if request.method == 'POST':
            data = request.get_json()
            count_activation = int(data.get('count', ''))
            # = int(data.get('reuse', ''))
            print(count_activation)
            # Декодируем токен для получения идентификатора пользователя
            token = jwt.decode(request.cookies.get('jwt'), SALT, algorithms="HS256")
            cursor = connection.cursor()
            cursor.execute('SELECT * FROM users WHERE email = %s', (token['email'],))
            id = cursor.fetchone()[0]
            try:
                
                #print(code)
                with open(f'./configs/{id}/{ID1}.json') as f:
                    contentt = json.load(f)
                contentt["Main"]["Creator"] = id

                strf = str(id)+str(contentt)
                code = str(hashlib.md5(strf.encode("utf")).hexdigest())

                strf2 = str(id)+str(contentt)+str(random.random())
                code2 = str(hashlib.md5(strf2.encode("utf")).hexdigest())
                print(123)

                
                if count_activation == 9999:
                    
                    #shutil.copyfile(f'./configs/{id}/{ID1}.json', f'./share/{code}.json')
                    with open(f'./share/{code}.json', 'w', encoding='utf-8') as file:
                        json.dump(contentt, file, ensure_ascii=False, indent=4)
                    return make_response(jsonify(json.loads('{"success": 1, "code": "'+code+'"}')), 200)
                elif count_activation > 0 and count_activation < 1000:
                    with open(f'./share/{code2}_{count_activation}.json', 'w', encoding='utf-8') as file:
                        json.dump(contentt, file, ensure_ascii=False, indent=4)
          
                    return make_response(jsonify(json.loads('{"success": 1, "code": "'+code2+'"}')), 200)
                else:
                    return make_response(jsonify(json.loads('{"success": 0, "error": "incorrect number of code uses"}')), 400) 
                

            except Exception as E:
                
                return str(E), 500


@config_activate.route('/api/profile/activate/<string:hash>', methods=['GET'])
def activate(hash):
    if validate():
        if len(hash) == 32:
            data = request.get_json()

            # Декодируем токен для получения идентификатора пользователя
            token = jwt.decode(request.cookies.get('jwt'), SALT, algorithms="HS256")
            cursor = connection.cursor()
            cursor.execute('SELECT * FROM users WHERE email = %s', (token['email'],))
            id = cursor.fetchone()[0]
            directory = './share'
            user_id=id
            for filename in os.listdir(directory):
                if filename.startswith(hash):
                    print(f"Файл, начинающийся с '{hash}', существует.")
                    user_configs_dir = f'./configs/{user_id}'

                    numbers = [
                        int(file.replace('.json', ''))
                        for file in os.listdir(user_configs_dir) if file.endswith('.json')
                    ]
                    
                    new_config_index = sorted(numbers)[-1] + 1 if numbers else 1
                    new_config_path = f'./configs/{user_id}/{new_config_index}.json'
                    

                    if '_' in filename:
                        try:
                            #print(1234)
                            count = int(filename.split('_')[1].split('.')[0])
                            if count > 1:
                                new_filename = f'{filename.split("_")[0]}_{count-1}.json'
                                #print(new_filename)
                                os.rename(f'./share/{filename}', f'./share/{new_filename}')
                                shutil.copy(f'./share/{new_filename}', new_config_path)
                            else:
                                os.remove(f'./share/{filename}')
                            return 'ok', 200
                        except ValueError:
                            return 'invalid filename format', 400
                    else:
                        print(123)
                        shutil.copy(f'./share/{filename}', new_config_path)
                        return 'ok', 200

            print(f"Файл, начинающийся с '{hash}', не найден.")
            return 'invalid code', 400
    # Текущая директория
            

            
        else:
            return 'invalid code', 400
        
