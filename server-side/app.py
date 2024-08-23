from flask import Flask, request, Response
import utils.functions as fns 
import json

app = Flask(__name__)

@app.route("/")
def hello_world():
    return {"success": True, "message": "Server is Running..."}


# Search for Anime
@app.route("/anime")
def searchAnime():
    searchQuery = request.args.get("query", "")
    
    result, statusCode = fns.searchAnime(searchQuery)

    return Response(json.dumps(result), status=statusCode)
    
# Get an Anime Data
@app.route("/anime/<int:id>")
def animeDetails(id):
    result, statusCode = fns.getAnimeDetails(id)
    
    return Response(json.dumps(result), status=statusCode)

# Get an Anime Characters with VA
@app.route("/anime/<int:id>/characters")
def animeCharacters(id):
    result, statusCode = fns.getAnimeCharacters(id)
    
    return Response(json.dumps(result), status=statusCode)


if (__name__ == "__main__"):
    app.run(debug=True)