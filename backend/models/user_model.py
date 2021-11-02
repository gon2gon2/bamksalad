from app import db

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(50), nullable=False)
    pw_reset = db.Column(db.Boolean)
    
    
    def __init__(self, name, email, password, phone_number):
        self.name = name
        self.email = email
        self.password = password
        self.phone_number = phone_number
        self.pw_reset = False
        
    def to_dict(self):
        return {x.name: getattr(self, x.name) for x in self.__table__.columns}
