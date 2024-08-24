from .base_paths import *
from .helpers import *


# Search an Anime
def searchAnime(query="", limit=12):
    path = f"?q={query}&limit={limit}"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500

    returnResponse = {"success": True, "data": []}

    for item in serverResponse["data"]:
        data = {
            "id": item.get("mal_id"),
            "title": item.get("title"),
            "title_english": item.get("title_english", ""),
            "title_japanese": item.get("title_japanese", ""),
            "thumbnail": item.get("images", {})
            .get("jpg", {})
            .get("small_image_url", ""),
            "type": item.get("type"),
            "status": item.get("status"),
            "year": (
                item.get("year")
                if not item.get("year") == None
                else item.get("aired", {})
                .get("prop", {})
                .get("from", {})
                .get("year", "")
            ),
            "score": item.get("score"),
        }

        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Anime Details
def getAnimeDetails(id):
    path = f"/{id}/full"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    data = serverResponse.get("data")

    if not data:
        return {
            "success": False,
            "message": serverResponse.get("message", "Item not Found"),
        }, serverResponse.get("status", 404)

    animeData = {
        "id": data.get("mal_id"),
        "title": data.get("title"),
        "title_english": data.get("title_english"),
        "title_japanese": data.get("title_japanese"),
        "synopsis": data.get("synopsis"),
        "type": data.get("type"),
        "source": data.get("source"),
        "episodes": data.get("episodes"),
        "status": data.get("status"),
        "aired": data.get("aired"),
        "duration": data.get("duration"),
        "rating": data.get("rating"),
        "score": data.get("score"),
        "scored_by": data.get("scored_by"),
        "mal_rank": data.get("rank"),
        "season": data.get("season"),
        "year": data.get("year"),
        "producers": removeProperty(data.get("producers", {}), "url"),
        "studios": removeProperty(data.get("studios", {}), "url"),
        "genres": removeProperty(data.get("genres", {}), "url"),
        "themes": removeProperty(data.get("themes", {}), "url"),
        "related": removeProperty(data.get("relations", {}), "url"),
        "streaming": data.get("streaming", []),
    }

    returnResponse = {"success": True, "data": animeData}

    return returnResponse, 200


# Get Anime Characters
def getAnimeCharacters(id):
    path = f"/{id}/characters"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    data = serverResponse.get("data")

    if not data:
        return {
            "success": False,
            "message": serverResponse.get("message", "Item not Found"),
        }, serverResponse.get("status", 404)

    returnResponse = {"success": True, "data": []}

    for item in serverResponse["data"]:
        character = item["character"]
        voice_actors = item["voice_actors"]

        data = {
            "id": character.get("mal_id", ""),
            "name": character.get("name"),
            "image": character.get("images", {}).get("jpg", {}).get("image_url"),
            "role": item.get("role"),
            "favorites": item.get("favorites"),
            "voice_actors": [],
        }

        for actor in voice_actors:
            person = actor["person"]
            vaData = {
                "id": person.get("mal_id", ""),
                "name": person.get("name"),
                "language": actor.get("language"),
                "image": person.get("images", {}).get("jpg", {}).get("image_url"),
            }

            data["voice_actors"].append(vaData)

        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Anime Episodes
def getAnimeEpisodes(id, page=1):
    path = f"/{id}/episodes?page={page}"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    data = serverResponse.get("data")

    if not data:
        return {
            "success": False,
            "message": serverResponse.get("message", "Item not Found"),
        }, serverResponse.get("status", 404)

    returnResponse = {
        "success": True,
        "pagination": serverResponse.get("pagination", {}),
        "data": [],
    }

    for item in serverResponse["data"]:
        data = replaceProperty(
            removeProperty(item, ["url", "title_romanji"]), "mal_id", "id"
        )
        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Anime single Episode
def getAnimeSingleEpisode(id, epId):
    path = f"/{id}/episodes/{epId}"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    data = serverResponse.get("data")

    if not data:
        return {
            "success": False,
            "message": serverResponse.get("message", "Item not Found"),
        }, serverResponse.get("status", 404)

    data = serverResponse["data"]
    returnResponse = {
        "success": True,
        "data": replaceProperty(
            removeProperty(data, ["url", "title_romanji"]), "mal_id", "id"
        ),
    }

    return returnResponse, 200


# Get Anime Reviews
def getAnimeReviews(id, page=1, spoilers="false", preliminary="true"):
    path = f"/{id}/reviews?page={page}&spoilers={spoilers}&preliminary={preliminary}"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    data = serverResponse.get("data")

    if not data:
        return {
            "success": False,
            "message": serverResponse.get("message", "Item not Found"),
        }, serverResponse.get("status", 404)

    returnResponse = {
        "success": True,
        "data": [],
    }

    for item in serverResponse["data"]:
        data = replaceProperty(removeProperty(item, ["url"]), "mal_id", "id")
        user = data.get("user", {})
        image = user.get("images", {}).get("jpg", {}).get("image_url")
        user = removeProperty(user, ["url", "images"])
        user["image"] = image

        data["user"] = user

        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Anime Recommendations of an Anime Watchers
def getAnimeRecommendations(id, limit=25):
    path = f"/{id}/recommendations"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    data = serverResponse.get("data")

    if not data:
        return {
            "success": False,
            "message": serverResponse.get("message", "Item not Found"),
        }, serverResponse.get("status", 404)

    returnResponse = {"success": True, "data": []}

    for item in serverResponse["data"]:
        entry = item.get("entry", {})
        image = getImageFromImages(entry.get("images", {})).get("image_url")
        data = replaceProperty(removeProperty(entry, ["url", "images"]), "mal_id", "id")
        data["image"] = image
        data["votes"] = item.get("votes")
        data["mal_recommendation"] = item.get("url")

        returnResponse["data"].append(data)
        if len(returnResponse["data"]) == 25:
            break

    return returnResponse, 200


# Get Anime Imaged
def getAnimeImages(id):
    path = f"/{id}/pictures"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    data = serverResponse.get("data")

    if not data:
        return {
            "success": False,
            "message": serverResponse.get("message", "Item not Found"),
        }, serverResponse.get("status", 404)

    returnResponse = {"success": True, "data": []}

    for item in serverResponse["data"]:
        images = getImageFromImages(item)
        returnResponse["data"].append(images)

    return returnResponse, 200


# Get Anime Videos
def getAnimeVideos(id):
    path = f"/{id}/videos"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    data = serverResponse.get("data")

    if not data:
        return {
            "success": False,
            "message": serverResponse.get("message", "Item not Found"),
        }, serverResponse.get("status", 404)

    returnResponse = {"success": True, "data": []}
    videoData = serverResponse["data"]

    for item in videoData["promo"]:
        trailer = item["trailer"]
        data = {
            "title": item["title"],
            "url": trailer.get("url"),
            "embed_url": trailer.get("embed_url"),
            "images": {
                "small": trailer.get("images", {}).get("small_image_url"),
                "medium": trailer.get("images", {}).get("medium_image_url"),
                "large": trailer.get("images", {}).get("large_image_url"),
                "maximum": trailer.get("images", {}).get("maximum_image_url"),
            },
        }

        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Anime Data
def getAnime(
    filters={"q": "", "type": "", "status": "", "rating": "", "genres": ""},
    page=1,
    limit=20,
    order_by="",
    start_date="",
    end_date="",
):
    path = f"?page={page}&limit={limit}&order_by={order_by}&start_date={start_date}&end_date={end_date}"

    for key, value in enumerate(filters):
        if value == "":
            continue
        path += f"&{key}={value}"

    animeResponse = animeBase(path)
    return animeResponse
