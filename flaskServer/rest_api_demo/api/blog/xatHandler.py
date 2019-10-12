from flask import Flask
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET_KEY']='mysecret'
socketio = SocketIO(app)

@socketio.on('message')
def handleMessage(msg):
    print('Message: ' + msg)
    send(msg, brodcast=True)

if __name__=='__main__':
    app.Debug=True
    socketio.run(app)
