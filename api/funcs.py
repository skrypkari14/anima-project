from flask import request, Blueprint, redirect, make_response
import hashlib
import psycopg2
from database import connection
from markupsafe import escape
import jwt
import time
api_funcs = Blueprint('api_funcs', __name__)
import time
import json

# Получение текущего времени в формате Unix

SALT = b'iRlf_s4lt*'
import re
# Define dictionaries for each category with function names and default settings
categories = {
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


@api_funcs.route('/api/v1/funcs', methods=['get'])
def get_funcs():
    return json.dumps(categories, indent=4)

