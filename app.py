from textblob import TextBlob
from datetime import date
from flask import Flask, request
from flask import PyMango
import os
#Cron que s'ha de ficar al fitxer crontab 55 23 * * * wget 127.0.0.1:5000/

app = Flask(__name__)


@app.route('/', methods=['POST'])
def actualize_BBDD(config_object='pymongoexample.settings'):

    today_chats = ["Long live to the king", "I'm so excited", "I don't unexcited this theme", "Don't blame me"]
    
    #today_chats=db.chat.find({date : date.today()})

    result = 0

    for chat in today_chats:
        #for message in chat.messages:
            testimonial = TextBlob(chat)
            sentiment = testimonial.sentiment
            result = (result+float(sentiment[0]))/2
            #INSERT MONGODB 

    print(result)

    f=open("hotal.txt", "w+")
    f.write("hotal")

if __name__=='__main__':
    app.run(debug=True)


    




