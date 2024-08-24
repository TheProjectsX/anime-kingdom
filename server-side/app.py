from flask import Flask, request, Response
import utils.functions as fns
import json

app = Flask(__name__)


@app.route("/")
def hello_world():
    return {"success": True, "message": "Server is Running..."}


"""
ANIME ROUTES
"""


# Search for Anime
@app.route("/anime")
def searchAnime():
    searchQuery = request.args.get("query", "")

    result, statusCode = fns.searchAnime(searchQuery)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Anime by Filters
@app.route("/anime/filter")
def animeByGenre():
    q = request.args.get("query", "")
    genres = request.args.get("genres", "")
    typeA = request.args.get("type", "")
    status = request.args.get("status", "")
    rating = request.args.get("rating", "")

    page = request.args.get("page", 1)
    limit = request.args.get("limit", 20)
    order_by = request.args.get("order_by", "popularity")
    start_date = request.args.get("start_date", "")
    end_date = request.args.get("end_date", "")

    result, statusCode = fns.getFilteredAnime(
        filters={
            "q": q,
            "genres": genres,
            "type": typeA,
            "status": status,
            "rating": rating,
        },
        page=page,
        limit=limit,
        order_by=order_by,
        start_date=start_date,
        end_date=end_date,
    )

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get an Anime common Data
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


"""
CHARACTERS ROUTE
"""


# Get an Anime Character Details
@app.route("/characters/<int:id>")
def characterDetails(id):
    result, statusCode = fns.getCharacterDetails(id)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get an Anime Character Images
@app.route("/characters/<int:id>/images")
def characterImages(id):
    result, statusCode = fns.getCharacterImages(id)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


"""
SEASONAL ROUTE
"""


# Get Seasons List
@app.route("/seasons")
def seasonsList():
    result, statusCode = fns.getSeasonList()

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Seasons List
@app.route("/seasons/<int:year>/<string:season>")
def seasonalAnime(year, season):
    result, statusCode = fns.getSeasonalAnime(year, season)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


if __name__ == "__main__":
    app.run(debug=True)
