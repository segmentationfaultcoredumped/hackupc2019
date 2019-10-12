import logging

from flask import request
from flask_restplus import Resource
from rest_api_demo.api.restplus import api

log = logging.getLogger(__name__)

ns = api.namespace('xat', description='user xat')

@ns.route('/')
class Xat(Resource):
    def get(self):
        return {'Josep': 'Hello world'}

if __name__ == '__main__':
    app.run(debug=True)
