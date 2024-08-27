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
    limit = request.args.get("limit", 12)

    result, statusCode = fns.getSearchedAnime(searchQuery, limit=limit)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Anime by Filters
@app.route("/anime/filter")
def animeByFilter():
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


# Get an Anime common Data
@app.route("/anime/<int:id>/simple")
def animeSimpleData(id):
    result, statusCode = fns.getAnimeSimpleData(id)

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
    page = request.args.get("page", 1)
    spoilers = request.args.get("spoilers", "false")
    preliminary = request.args.get("preliminary", "true")

    result, statusCode = fns.getAnimeReviews(
        id, page=page, spoilers=spoilers, preliminary=preliminary
    )

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


# Get Seasonal Anime
@app.route("/seasons/<int:year>/<string:season>")
def seasonalAnime(year, season):
    result, statusCode = fns.getSeasonalAnime(year, season)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Upcoming Anime
@app.route("/seasons/now")
def seasonalNowAnime():
    result, statusCode = fns.getSeasonalAnime("now")

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Upcoming Anime
@app.route("/seasons/upcoming")
def seasonalUpcomingAnime():
    result, statusCode = fns.getSeasonalAnime("upcoming")

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


"""
TOP ROUTE
"""


# Get Top Anime
@app.route("/top/anime")
def topAnime():
    type = request.args.get("type", "")
    filter = request.args.get("filter", "")

    result, statusCode = fns.getTopAnime(type, filter)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Top Anime Characters
@app.route("/top/characters")
def topCharacters():
    result, statusCode = fns.getTopCharacters()

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Top Anime Manga
@app.route("/top/manga")
def topManga():
    result, statusCode = fns.getTopManga()

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


"""
TOOLS ROUTE
"""


# Get info Of an Anime Screenshot
@app.route("/tools/reverse-image", methods=["GET", "POST"])
def reverseImage():
    if request.method == "POST":
        image = request.files.get("image")
        if image is None:
            return {"success": False, "message": "No Image Sent"}

        result, statusCode = fns.getReverseImageInfo(image=image.read())

    elif request.method == "GET":
        url = request.args.get("url")
        if url is None:
            return {"success": False, "message": "No URL Provided"}
        result, statusCode = fns.getReverseImageInfo(url=url)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Waifu Categories
@app.route("/tools/waifu/categories")
def waifuCategories():
    result, statusCode = fns.getWaifuImgCategories()

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Waifu Images
@app.route("/tools/waifu/<string:type>/<string:category>")
def waifuImages(type, category):
    limit = request.args.get("limit", 20)

    result, statusCode = fns.getWaifuImages(type, category, limit)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Compare Voice Artists
@app.route("/tools/compare-va")
def compareVoiceArtists():
    animeIdz = request.args.get("anime", "").replace(" ", "").split(",")
    if not len(animeIdz) == 2:
        return {"success": False, "message": "Must give 2 Anime Ids"}, 400

    anime_01, anime_02 = animeIdz
    language = request.args.get("language", "Japanese")

    try:
        result, statusCode = fns.getVoiceArtistsCompared(
            anime_01_id=anime_01, anime_02_id=anime_02, language=language
        )
    except Exception as e:
        return {
            "success": False,
            "message": "Failed to Compare Voice Artists",
            "error": str(e),
        }, 500
    # print(result)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


if __name__ == "__main__":
    app.run(debug=True)
