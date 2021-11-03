from flask import Blueprint, request
from models.user_model import User
from app import db

bp = Blueprint('pwreset', __name__)