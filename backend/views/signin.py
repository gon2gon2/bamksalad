from flask import Blueprint, request, session
from models.user_model import *
import json
import bcrypt

bp = Blueprint('signin',__name__)

@bp.route('/signin', methods=['POST'])
def login_user():
    request_data = json.loads(request.data) 
    user_email = request_data['email']
    user_password = request_data['password'].encode('utf-8')
    data = User.query.filter_by(email = user_email).first()

    if data is None:
        return "회원 정보가 없습니다.", 400
    else:
        check_password = bcrypt.checkpw(user_password, data.password.encode('utf-8'))
        if check_password:
            session['login'] = data.email
            return data.name, 200
        else:
            return "패스워드가 다릅니다.", 403

