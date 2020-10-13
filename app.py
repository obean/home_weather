from flask import Flask, render_template
from sensorhub.hub import SensorHub

app = Flask(__name__)

@app.route('/')


def index():
    hub = SensorHub()
    hubData = {
        'thermo' : hub.get_temperature(),
        'lumens' : hub.get_brightness()
        }
    return render_template('index.html', **hubData)

    

    
@app.route('/cakes')
def cakes():
    return render_template('cakes_index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')