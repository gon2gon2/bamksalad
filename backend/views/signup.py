from flask import Blueprint, request
from models.user_model import *
import bcrypt

bp = Blueprint('signup',__name__)

@bp.route('/signup', methods=['POST'])
def add_user():
    if request.method == 'POST':
        user_info = request.get_json()
        user = User.query.filter_by(email = user_info['email']).first()
        if user:
            return '이미 등록된 회원입니다.'
        else:
            pwd = user_info['password']
            hash_pwd = (bcrypt.hashpw(pwd.encode('UTF-8'), bcrypt.gensalt())).decode('utf-8')
            query = User(user_info['email'], user_info['username'], hash_pwd)
            db.session.add(query)
            db.session.commit()
            db.session.close()
            return 'Success'
