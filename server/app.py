from flask import Flask, jsonify,render_template
from flask_cors import CORS
import csv
import datetime


DEBUG = True

app = Flask(__name__)
app.config.from_object(__name__)

CORS(app, resources={r'/*': {'origins': '*'}})

@app.route('/AQI/<location>',methods=['GET'])
def AQI_loc(location):
    to_return = {}
    with open('data/AQI.csv','r') as f:
        reader = csv.reader(f)
        headers = next(reader)
        for n, row in enumerate(reader):
            to_return[n] = row[headers.index(location)]

    return jsonify(to_return)

@app.route('/AQI',methods=['GET'])
def AQI_():
    return render_template('AQI.html')

@app.route('/HW',methods=['GET'])
def HW_():
    return render_template('HW.html')


@app.route('/HW/<int:month>', methods=['GET'])
def HW(month):
    
    to_return = {}
    with open('data/HW_MAMJ.csv','r') as f:
        reader = csv.reader(f)
        next(reader)
        count = 0
        for row in reader:
            if not row[0]:
                continue
            date = datetime.datetime.strptime(row[0],"%d-%m-%Y %H:%M")
            if date.month == month:
                count += 1
                to_return[f"{count}"] = {
                    'warangal':row[1],
                    'adilabad':row[2],
                    'nizamabad':row[3],
                    'khammam':row[4],
                    'karimnagar': row[5]
                }
    
    if month == 3:
        to_return['start_cell'] = 3
    elif month == 4:
        to_return['start_cell'] = 6
    elif month == 5:
        to_return['start_cell'] = 2
    elif month == 6:
        to_return['start_cell'] = 5

    return jsonify(to_return)

@app.route('/',methods=['GET'])
def index():
    return render_template('index.html')



if __name__ == '__main__':
    app.run(port=8080)