from flask import request
from .controllers import login,register
from flask import Blueprint

auth_blueprint = Blueprint('auth',__name__)
@auth_blueprint.route('/api/login',methods=['POST'])
def signin():
    return login()
@auth_blueprint.route('/api/reg',methods=['POST'])
def signup():
    return register()
