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

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get an Anime Data
@app.route("/anime/<int:id>")
def animeDetails(id):
    result, statusCode = fns.getAnimeDetails(id)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get an Anime Characters with VA
@app.route("/anime/<int:id>/characters")
def animeCharacters(id):
    result, statusCode = fns.getAnimeCharacters(id)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get an Anime Episode List
@app.route("/anime/<int:id>/episodes")
def animeEpisodes(id):
    result, statusCode = fns.getAnimeEpisodes(id)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get an Anime single Episode
@app.route("/anime/<int:id>/episodes/<int:epId>")
def animeSingleEpisode(id, epId):
    result, statusCode = fns.getAnimeSingleEpisode(id, epId)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get an Anime Reviews
@app.route("/anime/<int:id>/reviews")
def animeReviews(id):
    result, statusCode = fns.getAnimeReviews(id)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get an Anime Recommendations
@app.route("/anime/<int:id>/recommendations")
def animeRecommendations(id):
    result, statusCode = fns.getAnimeRecommendations(id)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get an Anime Images
@app.route("/anime/<int:id>/images")
def animeImages(id):
    result, statusCode = fns.getAnimeImages(id)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get an Anime Videos
@app.route("/anime/<int:id>/videos")
def animeVideos(id):
    result, statusCode = fns.getAnimeVideos(id)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


if __name__ == "__main__":
    app.run(debug=True)
