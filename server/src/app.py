from flask import request,jsonify
import pickle
import pandas as pd
from src import create_app
app = create_app()
from src.accounts import acc_urls
from src.registers import reg_urls
app.register_blueprint(acc_urls.urls_blueprint)
app.register_blueprint(reg_urls.auth_blueprint)
with open('../../model/bitcoin.pkl','rb') as f:
    model = pickle.load(f)
@app.route('/api/model',methods=['POST'])
def predict():
    dates = request.json['dates']
    pred_res = model.predict(pd.DataFrame([dates],columns=['ds']))
    return jsonify({'result':pred_res['yhat'][0]})
if __name__=='__main__':
    app.run(debug=True)