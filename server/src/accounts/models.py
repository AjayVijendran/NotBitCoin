from src import db

class Account(db.Model):
    id = db.Column(db.String(100),primary_key=True)
    name = db.Column(db.String(50))
    age = db.Column(db.Integer)
    email = db.Column(db.String(70))
    phone_no = db.Column(db.BigInteger)
    address = db.Column(db.String(400))
    def toDict(self):
        return { c.key: str(getattr(self, c.key)) for c in self.__table__.columns }
    def __repr__(self):
        return "<%r>" % self.email
