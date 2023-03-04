from flask import Flask, jsonify
from flask_cors import CORS
import csv
import datetime

DEBUG = True

app = Flask(__name__)
app.config.from_object(__name__)

CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')

@app.route('/HW/<int:month>',methods=['GET'])
def get_HW_month(month):
    if month < 3 or month > 6:
        return 400
    
    to_return = {}
    with open('data/prediction-heat-wave-MAMJ-final.csv','r') as f:
        reader = csv.reader(f)
        next(reader)
        for row in reader:
            if not row[0]:
                continue
            date = datetime.datetime.strptime(row[0],"%d-%m-%Y %H:%M")
            if date.month == month:
                to_return[row[0]] = {
                    'warangal':row[1],
                    'adilabad':row[2],
                    'nizamabad':row[3],
                    'khammam':row[4],
                    'karimnagar': row[5]
                }
    
    if month == 3:
        to_return['start_cell'] = 3
    elif month == 4:
        to_return['start_cell'] = 7
    elif month == 5:
        to_return['start_cell'] = 2
    elif month == 6:
        to_return['start_cell'] = 5

    return jsonify(to_return)






if __name__ == '__main__':
    app.run()