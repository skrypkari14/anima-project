from flask import Blueprint

# Создаем Blueprint для API
api_bp = Blueprint('api', __name__)

# Импортируем представления (views) для API
from . import register, login, funcs
