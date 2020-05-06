from app import app

@app.route('/')
@app.route('/index')
def index():
    return {'message': 'Flask is Active'}
