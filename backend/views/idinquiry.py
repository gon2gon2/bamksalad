from flask import Blueprint, request, jsonify
from models.user_model import User

bp = Blueprint('idinquiry', __name__)

@bp.route('/idinquiry', methods=['POST'])
def idinquiry():
       
    name = request.json.get('name')
    phone_number = request.json.get('phone_number')

    user= User.query.filter(
        (User.name==name)
        & (User.phone_number==phone_number)
    ).first()
    
    if not user:
        return "no content", 204
    
    return jsonify({"email": user.email}), 200