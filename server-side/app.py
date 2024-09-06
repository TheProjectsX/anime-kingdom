from flask import Flask, request, Response
from flask_cors import CORS
import utils.functions as fns
import json
import anime_quotes

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000"]}})


@app.route("/")
def hello_world():
    return {"success": True, "message": "Server is Running..."}


"""
ANIME ROUTES
"""


##### Routes for Client Side Only #####
# Get Anime list for Homepage
@app.route("/anime/home")
def homepageAnime():
    limit = request.args.get("limit", 6)
    result, statusCode = fns.getHomepageAnime(limit)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Filter Options
@app.route("/anime/filters")
def animeFilterOptions():
    result, statusCode = fns.getAnimeFilters()

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Search for Anime
@app.route("/anime/search")
def searchAnime():
    searchQuery = request.args.get("query", "")
    limit = request.args.get("limit", 12)

    result, statusCode = fns.getSearchedAnime(searchQuery, limit=limit)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Anime by Filters
@app.route("/anime/filter")
def animeByFilter():
    query = request.args.get("query", "")
    genres = request.args.get("genres", "")
    typeA = request.args.get("type", "")
    status = request.args.get("status", "")
    rating = request.args.get("rating", "")

    min_score = request.args.get("min_score", 1)
    max_score = request.args.get("max_score", "")

    page = request.args.get("page", 1)
    limit = request.args.get("limit", 20)
    order_by = request.args.get("order_by", "")
    start_date = request.args.get("start_date", "")
    end_date = request.args.get("end_date", "")

    result, statusCode = fns.getFilteredAnime(
        query=query,
        filters={
            "genres": genres,
            "type": typeA,
            "status": status,
            "rating": rating,
        },
        min_score=min_score,
        max_score=max_score,
        page=page,
        limit=limit,
        order_by=order_by,
        start_date=start_date,
        end_date=end_date,
    )

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Anime Genres
@app.route("/anime/genres")
def animeGenres():
    result, statusCode = fns.getAnimeGenres()

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
    page = request.args.get("page", 1)

    result, statusCode = fns.getAnimeEpisodes(id, page=page)
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
    filter = request.args.get("filter", "")
    continuing = request.args.get("continuing", "false")
    limit = request.args.get("limit", 20)
    page = request.args.get("page", 1)

    result, statusCode = fns.getSeasonalAnime(
        year, season, filter=filter, continuing=continuing, limit=limit, page=page
    )
    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Upcoming Anime
@app.route("/seasons/now")
def seasonalNowAnime():
    limit = request.args.get("limit", 20)
    page = request.args.get("page", 1)

    result, statusCode = fns.getSeasonalAnime("now", limit=limit, page=page)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Upcoming Anime
@app.route("/seasons/upcoming")
def seasonalUpcomingAnime():
    limit = request.args.get("limit", 20)
    page = request.args.get("page", 1)

    result, statusCode = fns.getSeasonalAnime("upcoming", limit=limit, page=page)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


"""
TOP ROUTE
"""


# Get Top Anime
@app.route("/top/anime")
def topAnime():
    type = request.args.get("type", "")
    filter = request.args.get("filter", "")
    page = request.args.get("page", 1)
    limit = request.args.get("limit", 25)

    result, statusCode = fns.getTopAnime(type, filter, page=page, limit=limit)

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Top Anime Characters
@app.route("/top/characters")
def topCharacters():
    page = request.args.get("page", 1)
    limit = request.args.get("limit", 25)

    result, statusCode = fns.getTopCharacters(page=page, limit=limit)
    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Top Anime Manga
@app.route("/top/manga")
def topManga():
    page = request.args.get("page", 1)
    limit = request.args.get("limit", 25)

    result, statusCode = fns.getTopManga(page=page, limit=limit)
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


# Search for Anime Quotes Character
@app.route("/tools/quotes/characters")
def animeQuotesCharacters():
    query = request.args.get("query")

    result = anime_quotes.getCharactersByQuery(query)
    if result["success"]:
        statusCode = 200
    else:
        statusCode = 404

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


# Get Anime Character Quotes by Id
@app.route("/tools/quotes/<int:id>")
def animeCharacterQuotes(id):
    skip = request.args.get("skip", 0)
    limit = request.args.get("limit", 20)
    limit = None if limit == "none" or limit == "all" else limit

    result = anime_quotes.getCharacterQuotesById(id, skip=skip, limit=limit)
    if result["success"]:
        statusCode = 200
    else:
        statusCode = 404

    return Response(json.dumps(result), status=statusCode, mimetype="application/json")


if __name__ == "__main__":
    app.run(debug=True)
