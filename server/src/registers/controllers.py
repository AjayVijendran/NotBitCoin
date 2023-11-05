import uuid
from flask import make_response, request
from src import db
from .models import Auth
import jwt
from dotenv import load_dotenv
import os
import datetime
from werkzeug.security import check_password_hash,generate_password_hash
from ..accounts.models import Account
def login():
    det = request.json
    token  = jwt.encode({'id':'1234','exp':datetime.datetime.utcnow()+datetime.timedelta(minutes=45)},os.getenv('JWT_SECRET_KEY'))
    try:
        details = Auth.query.filter_by(email=det['email']).first()
        if check_password_hash(details.pwd,det['pwd']):
            token  = jwt.encode({'id':details.id,'exp':datetime.datetime.utcnow()+datetime.timedelta(minutes=45)},os.getenv('JWT_SECRET_KEY'))
            resp = make_response({"message":"Logged in successfully"},200)
            resp.set_cookie('jwt',token)
            return resp
    except:
        return make_response({"message":"Invalid Details.Please Try again"},400)
def register():
    det = request.json
    id = uuid.uuid4()
    enc_pwd = generate_password_hash(det['pwd'],method='pbkdf2:sha256')
    try:
        Auth.query.get(email=det['email']).to_Dict()
        return make_response({"message":"user already exists"},400)
    except:
        new_auth = Auth(id=id,email=det['email'],pwd=enc_pwd)
        db.session.add(new_auth)
        db.session.commit()
        new_acc = Account(id=id,email=det['email'],name=det['name'])
        db.session.add(new_acc)
        db.session.commit()
        return make_response({"message":"Registered Successfully"},200)


