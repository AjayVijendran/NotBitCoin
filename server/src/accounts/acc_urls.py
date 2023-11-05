from flask import  request,make_response
from .controllers import get_account,update_account
from flask import Blueprint
from functools import wraps
from dotenv import load_dotenv
import jwt
import os
from ..registers.models import Auth
urls_blueprint = Blueprint('urls', __name__)
def token_reqd(f):
    @wraps(f)
    def decorated(*args,**kwargs):
        token = None
        if request.cookies.get('jwt'):
            token = request.cookies.get('jwt')
        if not token:
            return make_response({"message": "Invalid Token, Login Again"},401)
        try:
            data = jwt.decode(token,os.getenv('JWT_SECRET_KEY'),algorithms=['HS256'])
            current_user = Auth.query.filter_by(id=data['id']).first()
        except:
            return  make_response({"message": "Invalid Token, Login Again"},401)
        return f(current_user.id,*args,**kwargs)
    return decorated
@urls_blueprint.route('/api/account',methods=['GET','POST'])
@token_reqd
def get_update(account_id):
    if request.method=='GET':
        return get_account(account_id)
    if request.method=='POST':
        return update_account(account_id)
