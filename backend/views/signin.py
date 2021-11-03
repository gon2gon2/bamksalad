from flask import Blueprint, request, session
from models.user_model import *
import json
import bcrypt

bp = Blueprint('signin',__name__)

@bp.route('/signin', methods=['POST'])
def login_user():
    request_data = json.loads(request.data) 
    user_email = request_data['email']
    user_pwd = request_data['password'].encode('utf-8')
    data = User.query.filter_by(email = user_email).first()

    if data is None:
        return 400, "회원 정보가 없습니다."
    else:
        check_password = bcrypt.checkpw(user_pwd, data.pwd.encode('utf-8'))
        if check_password:
            session['login'] = data.email
            return data.user_name
        else:
            return 400, "패스워드가 다릅니다."

