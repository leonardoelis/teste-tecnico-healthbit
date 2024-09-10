from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)

CORS(app)


@app.get('/getAlimentacao')
def get_alimentacao():
    with open('alimentos.json', encoding='utf-8', mode='r') as file:
        file_content = json.load(file)

    return jsonify(file_content)


@app.post('/submitFormulario')
def submit_formulario():
    data = request.json
    print(data)

    response = {
        "message": "Formulário recebido com sucesso!"
    }

    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)
