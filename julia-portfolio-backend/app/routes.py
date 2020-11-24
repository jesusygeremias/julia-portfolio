from app import app


@app.route('/about')
@app.route('/index')
def index():
    return {'message': 'Flask is Active'}
