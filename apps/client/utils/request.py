import json
import requests

URL = 'http://localhost:3000/api/'
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}


def jsarr_tostr(v): str(v).strip("}{[]").replace("_", '').split("},{")


def jsonify(v): return eval(v.content.decode().replace(
    "null", "None").replace("true", "True").replace("false", "False"))


def post(ep, data='{}'): return jsonify(requests.post(
    f"{URL}{ep}", data=json.dumps(data), headers=headers))


def get(ep): return jsonify(requests.get(f"{URL}{ep}", headers=headers))


def put(ep, data): jsonify(requests.put(
    f"{URL}{ep}", data=json.dumps(data), headers=headers))


def delete(ep, data): return jsonify(
    requests.delete(f"{URL}{ep}", data=json.dumps(data), headers=headers))
