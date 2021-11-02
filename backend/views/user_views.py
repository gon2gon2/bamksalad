from flask import Blueprint, request
from models.user_model import User
from app import db

bp = Blueprint('user', __name__)

@bp.route('/signup', methods=['POST'])
def signup():
    
    name = request.json.get('name')
    email = request.json.get('email')
    password = request.json.get('password')
    phone_number = request.json.get('phone_number')

    user = User(name=name,
                email=email,
                password=password,
                phone_number=phone_number)
    db.session.add(user)
    db.session.commit()
    
    return "ok", 200