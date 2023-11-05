from src import db
class Auth(db.Model):
    id = db.Column(db.String(100),primary_key=True)
    email = db.Column(db.String(70))
    pwd = db.Column(db.String(256))
    def toDict(self):
        return { c.key: str(getattr(self, c.key)) for c in self.__table__.columns }