from flask import Blueprint, request, jsonify
from models.user_model import User
from app import db

bp = Blueprint('pwinquiry', __name__)

@bp.route('/pwinquiry', methods=['POST'])
def pwinquiry():
    
    email = request.json.get('email')
    name = request.json.get('name')
    phone_number = request.json.get('phone_number')

    user = User.query.filter(
        (User.email==email)
        & (User.name==name)
        & (User.phone_number==phone_number)
    ).first()
    
    if not user:
        return "no content", 204
    
    import string
    import random

    number_of_strings = 5
    length_of_string = 8
    for x in range(number_of_strings):
        temp_pw = ''.join(random.SystemRandom().choice(string.ascii_letters + string.digits + string.punctuation) for _ in range(length_of_string))
    
    user.password = temp_pw
    user.pw_reset = True
    
    db.session.commit()
    return jsonify({"temp_pw": temp_pw}), 201