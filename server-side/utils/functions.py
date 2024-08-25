from .base_paths import *
from .helpers import *
import urllib.parse


# Search an Anime
def searchAnime(query="", limit=12):
    path = f"?q={query}&limit={limit}"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    data = serverResponse.get("data")

    if not data:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

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


# Get Filtered Anime
def getFilteredAnime(
    filters={"q": "", "type": "", "status": "", "rating": "", "genres": ""},
    page=1,
    limit=20,
    order_by="",
    start_date="",
    end_date="",
):
    path = f"?page={page}&limit={limit}&order_by={order_by}&start_date={start_date}&end_date={end_date}"

    for key, value in filters.items():
        if value == "":
            continue
        path += f"&{key}={value}"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    returnResponse = {
        "success": True,
        "pagination": serverResponse.get("pagination", {}),
        "data": [],
    }

    for item in serverData:
        data = {
            "id": item.get("mal_id"),
            "title": item.get("title"),
            "title_english": item.get("title_english", ""),
            "title_japanese": item.get("title_japanese", ""),
            "synopsis": item.get("synopsis"),
            "episodes": item.get("episodes"),
            "thumbnail": getImageFromImages(item.get("images", {})).get("image_url"),
            "type": item.get("type"),
            "source": item.get("source"),
            "status": item.get("status"),
            "mal_rank": item.get("rank"),
            "year": (
                item.get("year")
                if not item.get("year") == None
                else item.get("aired", {})
                .get("prop", {})
                .get("from", {})
                .get("year", "")
            ),
            "score": item.get("score"),
            "studios": replaceProperty(
                removeProperty(item.get("studios", []), ["url"]), "mal_id", "id"
            ),
            "genres": replaceProperty(
                removeProperty(item.get("genres", []), ["url"]), "mal_id", "id"
            ),
            "themes": replaceProperty(
                removeProperty(item.get("themes", []), ["url"]), "mal_id", "id"
            ),
            "demographics": replaceProperty(
                removeProperty(item.get("demographics", []), ["url"]), "mal_id", "id"
            ),
        }

        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Anime Details
def getAnimeDetails(id):
    path = f"/{id}/full"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    animeData = {
        "id": serverData.get("mal_id"),
        "title": serverData.get("title"),
        "title_english": serverData.get("title_english"),
        "title_japanese": serverData.get("title_japanese"),
        "synopsis": serverData.get("synopsis"),
        "type": serverData.get("type"),
        "source": serverData.get("source"),
        "episodes": serverData.get("episodes"),
        "status": serverData.get("status"),
        "aired": serverData.get("aired"),
        "duration": serverData.get("duration"),
        "rating": serverData.get("rating"),
        "score": serverData.get("score"),
        "scored_by": serverData.get("scored_by"),
        "mal_rank": serverData.get("rank"),
        "season": serverData.get("season"),
        "year": serverData.get("year"),
        "producers": removeProperty(serverData.get("producers", {}), "url"),
        "studios": removeProperty(serverData.get("studios", {}), "url"),
        "genres": removeProperty(serverData.get("genres", {}), "url"),
        "themes": removeProperty(serverData.get("themes", {}), "url"),
        "related": removeProperty(serverData.get("relations", {}), "url"),
        "streaming": serverData.get("streaming", []),
    }

    returnResponse = {"success": True, "data": animeData}

    return returnResponse, 200


# Get Anime Characters
def getAnimeCharacters(id):
    path = f"/{id}/characters"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
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
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
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
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    serverData = serverResponse["data"]
    returnResponse = {
        "success": True,
        "data": replaceProperty(
            removeProperty(serverData, ["url", "title_romanji"]), "mal_id", "id"
        ),
    }

    return returnResponse, 200


# Get Anime Reviews
def getAnimeReviews(id, page=1, spoilers="false", preliminary="true"):
    path = f"/{id}/reviews?page={page}&spoilers={spoilers}&preliminary={preliminary}"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    returnResponse = {
        "success": True,
        "data": [],
    }

    for item in serverData:
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
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)
    returnResponse = {"success": True, "data": []}

    for item in serverData:
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
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)
    returnResponse = {"success": True, "data": []}

    for item in serverData:
        images = replaceProperty(getImageFromImages(item), "image_url", "url")
        returnResponse["data"].append(images)

    return returnResponse, 200


# Get Anime Videos
def getAnimeVideos(id):
    path = f"/{id}/videos"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)
    returnResponse = {"success": True, "data": []}

    for item in serverData["promo"]:
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


##### CHARACTERS FUNCTIONS #####


# Get Anime Character Details
def getCharacterDetails(id):
    path = f"/{id}/full"

    serverResponse = charactersBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    returnResponse = {
        "success": True,
        "data": {
            "id": serverData.get("mal_id"),
            "name": serverData.get("name"),
            "image": getImageFromImages(serverData.get("images", {})).get("image_url"),
            "nicknames": serverData.get("nicknames"),
            "favorites": serverData.get("favorites"),
            "about": serverData.get("about"),
            "anime": [],
            "manga": [],
            "voices": [],
        },
    }

    for item in serverData["anime"]:
        anime = item.get("anime", {})
        data = {
            "id": anime.get("mal_id"),
            "role": item.get("role"),
            "title": anime.get("title"),
            "image": getImageFromImages(anime.get("images", {})).get("image_url"),
            "large_image": getImageFromImages(anime.get("images", {})).get(
                "large_image_url"
            ),
        }

        returnResponse["data"]["anime"].append(data)

    for item in serverData["manga"]:
        manga = item.get("manga", {})
        data = {
            "id": manga.get("mal_id"),
            "role": item.get("role"),
            "title": manga.get("title"),
            "image": getImageFromImages(manga.get("images", {})).get("image_url"),
            "large_image": getImageFromImages(manga.get("images", {})).get(
                "large_image_url"
            ),
        }

        returnResponse["data"]["manga"].append(data)

    for item in serverData["voices"]:
        person = item.get("person", {})

        data = {
            "id": person.get("mal_id"),
            "name": person.get("name"),
            "language": item.get("language"),
            "image": getImageFromImages(person.get("images", {})).get("image_url"),
        }

        returnResponse["data"]["voices"].append(data)

    return returnResponse, 200


# Get Anime Character Imaged
def getCharacterImages(id):
    path = f"/{id}/pictures"

    serverResponse = charactersBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)
    returnResponse = {"success": True, "data": []}

    for item in serverData:
        images = replaceProperty(getImageFromImages(item), "image_url", "url")
        returnResponse["data"].append(images)

    return returnResponse, 200


##### SEASONAL FUNCTIONS #####


# Get Season List
def getSeasonList():
    path = f""

    serverResponse = seasonsBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    returnResponse = {"success": True, "data": serverData}

    return returnResponse, 200


# Get Season Anime List
def getSeasonalAnime(year, season="", filter="", continuing="false"):
    if year in ["now", "upcoming"]:
        prefix = year
    else:
        prefix = f"{year}/{season}"

    path = f"/{prefix}?filter={filter}&continuing={continuing}"

    serverResponse = seasonsBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    returnResponse = {
        "success": True,
        "pagination": serverResponse.get("pagination", {}),
        "data": [],
    }

    for item in serverData:
        data = {
            "id": item.get("mal_id"),
            "title": item.get("title"),
            "title_english": item.get("title_english", ""),
            "title_japanese": item.get("title_japanese", ""),
            "synopsis": item.get("synopsis"),
            "episodes": item.get("episodes"),
            "thumbnail": getImageFromImages(item.get("images", {})).get("image_url"),
            "type": item.get("type"),
            "source": item.get("source"),
            "status": item.get("status"),
            "mal_rank": item.get("rank"),
            "year": (
                item.get("year")
                if not item.get("year") == None
                else item.get("aired", {})
                .get("prop", {})
                .get("from", {})
                .get("year", "")
            ),
            "score": item.get("score"),
            "studios": replaceProperty(
                removeProperty(item.get("studios", []), ["url"]), "mal_id", "id"
            ),
            "genres": replaceProperty(
                removeProperty(item.get("genres", []), ["url"]), "mal_id", "id"
            ),
            "themes": replaceProperty(
                removeProperty(item.get("themes", []), ["url"]), "mal_id", "id"
            ),
            "demographics": replaceProperty(
                removeProperty(item.get("demographics", []), ["url"]), "mal_id", "id"
            ),
        }

        returnResponse["data"].append(data)

    return returnResponse, 200


##### TOP FUNCTIONS #####


# Get Top Anime
def getTopAnime(type="", filter="", page=1, limit=25):
    path = f"/anime?type={type}&filter={filter}&page={page}&limit={limit}"

    serverResponse = topBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    returnResponse = {
        "success": True,
        "pagination": serverResponse.get("pagination", {}),
        "data": [],
    }

    for item in serverData:
        data = {
            "id": item.get("mal_id"),
            "title": item.get("title"),
            "title_english": item.get("title_english", ""),
            "title_japanese": item.get("title_japanese", ""),
            "synopsis": item.get("synopsis"),
            "episodes": item.get("episodes"),
            "thumbnail": getImageFromImages(item.get("images", {})).get("image_url"),
            "type": item.get("type"),
            "source": item.get("source"),
            "status": item.get("status"),
            "mal_rank": item.get("rank"),
            "year": (
                item.get("year")
                if not item.get("year") == None
                else item.get("aired", {})
                .get("prop", {})
                .get("from", {})
                .get("year", "")
            ),
            "score": item.get("score"),
            "studios": replaceProperty(
                removeProperty(item.get("studios", []), ["url"]), "mal_id", "id"
            ),
            "genres": replaceProperty(
                removeProperty(item.get("genres", []), ["url"]), "mal_id", "id"
            ),
            "themes": replaceProperty(
                removeProperty(item.get("themes", []), ["url"]), "mal_id", "id"
            ),
            "demographics": replaceProperty(
                removeProperty(item.get("demographics", []), ["url"]), "mal_id", "id"
            ),
        }

        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Top Characters
def getTopCharacters(page=1, limit=25):
    path = f"/characters?page={page}&limit={limit}"

    serverResponse = topBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    returnResponse = {
        "success": True,
        "pagination": serverResponse.get("pagination", {}),
        "data": [],
    }

    for item in serverData:
        data = {
            "id": item.get("mal_id"),
            "name": item.get("name"),
            "image": getImageFromImages(item.get("images", {})).get("image_url"),
            "nicknames": item.get("nicknames"),
            "favorites": item.get("favorites"),
            "about": item.get("about"),
        }

        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Top Manga
def getTopManga(page=1, limit=25):
    path = f"/manga?page={page}&limit={limit}"

    serverResponse = topBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    returnResponse = {
        "success": True,
        "pagination": serverResponse.get("pagination", {}),
        "data": [],
    }

    for item in serverData:
        data = {
            "id": item.get("mal_id"),
            "title": item.get("title"),
            "title_english": item.get("title_english", ""),
            "title_japanese": item.get("title_japanese", ""),
            "synopsis": item.get("synopsis"),
            "volumes": item.get("volumes"),
            "thumbnail": getImageFromImages(item.get("images", {})).get("image_url"),
            "type": item.get("type"),
            "source": item.get("source"),
            "status": item.get("status"),
            "mal_rank": item.get("rank"),
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


##### TOOLS FUNCTIONS #####


# Reverse Search an Image
def getReverseImageInfo(url=None, image=None):
    basePath = "https://api.trace.moe/search?anilistInfo&cutBorders"

    response = {}

    if url:
        getPath = f"{basePath}&url={urllib.parse.quote_plus(url)}"
        try:
            response = requests.get(getPath).json()
            response["success"] = True
        except Exception as e:
            response = {"success": False, "message": str(e)}

    elif image:
        try:
            response = requests.post(
                basePath,
                data=image,
                headers={"Content-Type": "image/jpeg"},
            ).json()
            response["success"] = True
        except Exception as e:
            response = {"success": False, "message": str(e)}
    else:
        response = {"success": False, "message": "Wrong Data provided"}

    if not response["success"]:
        return response, 500
    elif not response.get("result"):
        return {
            "success": False,
            "message": response.get("error", "Failed to Find Information"),
        }, 404

    serverResponse = response.get("result")

    returnResponse = {"success": True, "data": []}

    for item in serverResponse:
        anilist = item.get("anilist", {})
        data = {
            "id": anilist.get("idMal"),
            "title": anilist.get("title", {}).get("romaji"),
            "title_english": anilist.get("title", {}).get("english"),
            "episode": item.get("episode"),
            "similarity": item.get("similarity"),
            "filename": item.get("filename"),
            "video": item.get("video"),
            "image": item.get("image"),
            "from": item.get("from"),
            "to": item.get("to"),
        }

        returnResponse["data"].append(data)

    return returnResponse, 200
