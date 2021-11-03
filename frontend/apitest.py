from flask import Flask, request, jsonify, Blueprint
from flask_cors import CORS


bp = Blueprint('bp', __name__, url_prefix='/api')
app = Flask(__name__)
CORS(app)

@bp.route("/")
def home():
    return jsonify("Hello World")

@bp.route("/googlelogin")
def oauth_login():
    if request.method == 'POST':
        json_data = request.get_json()
        print(json_data)
        return


@bp.route("/signup", methods=["POST"])
def register():
    if request.method == 'POST':
        json_data = request.get_json()
        email = json_data['email']
        name = json_data['name']
        phone = json_data['phone_number']
        password = json_data['password']
        # repeatPassword = json_data['repeatPassword']
        
        dict_data = dict()
        dict_data = {
            "email":email,
            "name":name,
            "phone_number":phone,
            "password":password,
            # "repeatPassword":repeatPassword
        }

        print(dict_data)

        # return jsonify(1234)
        return jsonify({"FlaskResponseData": dict_data})

@bp.route("/signin", methods=["POST"])
def login():
    if request.method == 'POST':
        json_data = request.get_json()
        email = json_data['email']
        password = json_data['password']

        print(email)
        print(password)

        dict_data1 = dict()
        dict_data1 = {
            "email":email,
            "password":password,
            
        }
        return jsonify({"FlaskResponseData": dict_data1})


@bp.route("/idinquiry", methods=["POST"])
def findid():
    if request.method == 'POST':
        json_data = request.get_json()
        name = json_data['name']
        phone_number = json_data['phone_number']

        dict_data = dict()
        dict_data = {
            "name":name,
            "phone_number":phone_number
        }


        return jsonify({"FlaskResponseData": dict_data})


@bp.route("/pwinquiry", methods=["POST"])
def findpassword():
    if request.method == "POST":
        json_data = request.get_json()
        email = json_data['email']
        name = json_data['name']
        phone_number = json_data['phone_number']

        dict_data = dict()
        dict_data = {
            "email":email,
            "name":name,
            "phone_number":phone_number
        }
        return jsonify({"FlaskResponseData": dict_data})


@bp.route("/pwrset", methods=["POST"])
def passwordreset():
    if request.method == "POST":
        json_data = request.get_json()
        password = json_data['password']
        return jsonify({"FlaskResponseData": {"password":password}})



app.register_blueprint(bp, url_prefix='/api') # 블루프린트 등록 하는 부분이 나중에 오면 CORS 허용됨

if __name__ == '__main__':
    app.run('0.0.0.0', 5000, debug=True)
    
