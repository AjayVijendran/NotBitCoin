from flask import request,jsonify,make_response
from src import db
from .models import Account
# def create_acc():
#     user_det = request.json
#     new_acc = Account(id=user_det['id'],name=user_det['name'],age=user_det['age'],email=user_det['email'],phone_no=user_det['phone_no'],address=user_det['address'])
#     db.session.add(new_acc)
#     db.session.commit()
#     resp = Account.query.get(user_det['id']).toDict()
#     return jsonify(resp)
def get_account(account_id):
    response = Account.query.get(account_id).toDict()
    return jsonify(response)
def update_account(account_id):
    request_form = request.json
    account = Account.query.get(account_id)
    account.email        = request_form['email']
    account.name          = request_form['name']
    account.age      = request_form['age']
    account.phone_no = request_form['phone_no']
    account.address = request_form['address']
    db.session.commit()
    response = Account.query.get(account_id).toDict()
    return jsonify(response)