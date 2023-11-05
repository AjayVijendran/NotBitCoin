from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os
from dotenv import load_dotenv
db = SQLAlchemy()
migrate = Migrate()
load_dotenv()
def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI']=os.getenv('POSTGRES_DATABASE_URL')
    db.init_app(app)
    migrate.init_app(app,db)
    return app