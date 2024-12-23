from .base_paths import *
from .helpers import *
import urllib.parse
import requests
import time
import re
from datetime import datetime, timedelta
from dateutil import parser as dateparser
import anime_schedules as schedules

# TODO: change from (if not serverData to equivalent)

##### ANIME FUNCTIONS #####


# Get Banner Image from AniList: Inner Function
def getAnilistAnimeBanner(query):
    json = {
        "query": "query ($query: String, $page: Int, $perpage: Int) {Page (page: $page, perPage: $perpage) { media (search: $query, type: ANIME) {id bannerImage }}}",
        "variables": {"query": query, "page": 1, "perpage": 3},
    }

    serverResponse = anilistBase(json)
    if not serverResponse["success"]:
        return serverResponse, 500
    data = serverResponse.get("data", {}).get("Page", {}).get("media", [{}])
    if len(data) == 0:
        return None

    return data[0].get("bannerImage")


# Get Banner Image from AniList: Inner Function
def getAnilistMangaBanner(query):
    json = {
        "query": "query ($query: String, $page: Int, $perpage: Int) {Page (page: $page, perPage: $perpage) { media (search: $query, type: MANGA) {id bannerImage }}}",
        "variables": {"query": query, "page": 1, "perpage": 3},
    }

    serverResponse = anilistBase(json)
    if not serverResponse["success"]:
        return serverResponse, 500
    data = serverResponse.get("data", {}).get("Page", {}).get("media", [{}])

    return data[0].get("bannerImage")


# Search an Anime
def getSearchedAnime(query="", limit=12):
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
            "image": getImageFromImages(item.get("images", {})).get(
                "large_image_url", ""
            ),
            "type": item.get("type"),
            "status": item.get("status"),
            "aired": {
                "from": item.get("aired", {}).get("from"),
                "to": item.get("aired", {}).get("to"),
                "string": item.get("aired", {}).get("string"),
            },
            "year": (
                item.get("year")
                if not item.get("year") == None
                else item.get("aired", {})
                .get("prop", {})
                .get("from", {})
                .get("year", "")
            ),
            "score": item.get("score"),
            "scored_by": item.get("scored_by"),
        }

        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Filtered Anime
def getFilteredAnime(
    query="",
    filters={
        "type": "",
        "status": "",
        "rating": "",
        "genres": "",
    },
    sfw="true",
    min_score=1,
    max_score="",
    page=1,
    limit=20,
    producers="",
    sort="asc",
    order_by="",
    start_date="",
    end_date="",
):
    if type(filters) is not dict:
        filters = {}

    filters.update(
        {"order_by": order_by, "start_date": start_date, "end_date": end_date}
    )
    path = f"?q={query}&page={page}&limit={limit}&sort={sort}&producers={producers}&sfw={sfw}&min_score={min_score}&max_score={max_score}"

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

    serverPagination = serverResponse.get("pagination", {})
    pagination = {
        "has_next_page": serverPagination.get("has_next_page"),
        "pages_count": serverPagination.get("last_visible_page"),
        "total_count": serverPagination.get("items", {}).get("total"),
        "current_count": serverPagination.get("items", {}).get("count"),
    }

    returnResponse = {
        "success": True,
        "pagination": pagination,
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
            "duration": getDuration(item.get("duration")),
            "image": getImageFromImages(item.get("images", {})).get("image_url"),
            "type": item.get("type"),
            "source": item.get("source"),
            "status": item.get("status"),
            "aired": {
                "from": item.get("aired", {}).get("from"),
                "to": item.get("aired", {}).get("to"),
                "string": item.get("aired", {}).get("string"),
            },
            "mal_rank": item.get("rank"),
            "year": (
                item.get("year")
                if not item.get("year") == None
                else item.get("aired", {})
                .get("prop", {})
                .get("from", {})
                .get("year", "")
            ),
            "season": item.get("season"),
            "score": item.get("score"),
            "scored_by": item.get("scored_by"),
            "studios": replaceProperty(
                removeProperty(item.get("studios", []), ["url"]), "mal_id", "id"
            ),
            "producers": replaceProperty(
                removeProperty(item.get("producers", []), ["url"]), "mal_id", "id"
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


# Get Anime Statistics
def getAnimeStatistics(id):
    path = f"/{id}/statistics"

    serverResponse = animeBase(path)
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

    statistics, _ = getAnimeStatistics(id)

    animeData = {
        "id": serverData.get("mal_id"),
        "title": serverData.get("title"),
        "title_english": serverData.get("title_english"),
        "title_japanese": serverData.get("title_japanese"),
        "titles": serverData.get("titles", []),
        "image": getImageFromImages(serverData.get("images", {})).get("image_url"),
        "image_large": getImageFromImages(serverData.get("images", {})).get(
            "large_image_url"
        ),
        "banner": getAnilistAnimeBanner(serverData.get("title")),
        "trailer": {
            "youtube_id": serverData.get("trailer", {}).get("youtube_id"),
            "video": serverData.get("trailer", {}).get("url"),
            "embed": serverData.get("trailer", {}).get("embed_url"),
            "image": serverData.get("trailer", {})
            .get("images", {})
            .get("medium_image_url"),
            "image_large": serverData.get("trailer", {})
            .get("images", {})
            .get("maximum_image_url"),
        },
        "synopsis": serverData.get("synopsis"),
        "type": serverData.get("type"),
        "source": serverData.get("source"),
        "episodes": serverData.get("episodes"),
        "duration": getDuration(serverData.get("duration")),
        "status": serverData.get("status"),
        "aired": serverData.get("aired"),
        "rating": serverData.get("rating"),
        "score": serverData.get("score"),
        "scored_by": serverData.get("scored_by"),
        "mal_rank": serverData.get("rank"),
        "popularity": serverData.get("popularity"),
        "members": serverData.get("members"),
        "favorites": serverData.get("favorites"),
        "season": serverData.get("season"),
        "year": serverData.get("year"),
        "statistics": statistics.get("data", {}),
        "producers": replaceProperty(
            removeProperty(serverData.get("producers", {}), "url"), "mal_id", "id"
        ),
        "studios": replaceProperty(
            removeProperty(serverData.get("studios", {}), "url"), "mal_id", "id"
        ),
        "genres": replaceProperty(
            removeProperty(serverData.get("genres", {}), "url"), "mal_id", "id"
        ),
        "themes": replaceProperty(
            removeProperty(serverData.get("themes", {}), "url"), "mal_id", "id"
        ),
        "related": replaceProperty(
            removeProperty(serverData.get("relations", {}), "url"), "mal_id", "id"
        ),
        "streaming": serverData.get("streaming", []),
        "external": serverData.get("external", []),
    }

    returnResponse = {"success": True, "data": animeData}

    return returnResponse, 200


# Get Anime simple Data
def getAnimeSimpleData(id):
    path = f"/{id}"

    serverResponse = animeBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    pathC = f"/{id}/characters"

    serverResponseC = animeBase(pathC)
    if not serverResponseC["success"]:
        return serverResponseC, 500

    animeData = {
        "id": serverData.get("mal_id"),
        "title": serverData.get("title"),
        "title_english": serverData.get("title_english"),
        "image": getImageFromImages(serverData.get("images", {})).get("image_url"),
        "type": serverData.get("type"),
        "episodes": serverData.get("episodes"),
        "duration": getDuration(serverData.get("duration")),
        "score": serverData.get("score"),
        "scored_by": serverData.get("scored_by"),
        "mal_rank": serverData.get("rank"),
        "season": serverData.get("season"),
        "year": serverData.get("year"),
        "va_languages": getUniqueVAALang(serverResponseC.get("data", [])),
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
            "image": getImageFromImages(character.get("images", {})).get("image_url"),
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
                "image": getImageFromImages(person.get("images", {})).get("image_url"),
            }

            data["voice_actors"].append(vaData)

        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Anime Staffs
def getAnimeStaffs(id):
    path = f"/{id}/staff"

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
        person = item["person"]

        data = {
            "id": person.get("mal_id", ""),
            "name": person.get("name"),
            "image": getImageFromImages(person.get("images", {})).get("image_url"),
            "positions": item.get("positions", []),
        }

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

    serverPagination = serverResponse.get("pagination", {})
    pagination = {
        "has_next_page": serverPagination.get("has_next_page"),
        "pages_count": serverPagination.get("last_visible_page"),
    }

    returnResponse = {
        "success": True,
        "pagination": pagination,
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

    pagination = {
        "has_next_page": True if not len(serverData) < 20 else False,
    }

    returnResponse = {
        "success": True,
        "pagination": pagination,
        "data": [],
    }

    for item in serverData:
        data = replaceProperty(removeProperty(item, ["url"]), "mal_id", "id")
        user = data.get("user", {})
        image = getImageFromImages(user.get("images", {})).get("image_url")
        user = removeProperty(user, ["url", "images"])
        user["image"] = image

        data["user"] = user

        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Anime Recommendations of an Anime Watchers
def getAnimeRecommendations(id):
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
def getAnimePictures(id):
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
    returnResponse = {
        "success": True,
        "data": {"promo": [], "episodes": [], "music_video": []},
    }

    for item in serverData["promo"]:
        trailer = item.get("trailer", {})
        data = {
            "title": item.get("title"),
            "url": trailer.get("url"),
            "embed_url": trailer.get("embed_url"),
            "images": {
                "image": trailer.get("images", {}).get("image_url"),
                "small": trailer.get("images", {}).get("small_image_url"),
                "medium": trailer.get("images", {}).get("medium_image_url"),
                "large": trailer.get("images", {}).get("large_image_url"),
                "maximum": trailer.get("images", {}).get("maximum_image_url"),
            },
        }

        returnResponse["data"]["promo"].append(data)

    for item in serverData["episodes"]:
        data = {
            "title": item.get("title"),
            "episode": item.get("episode"),
            "images": {
                "image": getImageFromImages(item.get("images")).get("image_url"),
            },
        }

        returnResponse["data"]["episodes"].append(data)

    for item in serverData["music_videos"]:
        video = item.get("video", {})
        data = {
            "title": item.get("title"),
            "embed_url": video.get("embed_url"),
            "images": {
                "image": getImageFromImages(video.get("images")).get("image_url"),
            },
            "images": {
                "image": video.get("images", {}).get("image_url"),
                "small": video.get("images", {}).get("small_image_url"),
                "medium": video.get("images", {}).get("medium_image_url"),
                "large": video.get("images", {}).get("large_image_url"),
                "maximum": video.get("images", {}).get("maximum_image_url"),
            },
        }

        returnResponse["data"]["music_video"].append(data)

    return returnResponse, 200


# Get Anime Genres
def getAnimeGenres():
    path = f"/anime"

    serverResponse = genresBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    returnResponse = {
        "success": True,
        "data": replaceProperty(removeProperty(serverData, "url"), "mal_id", "id"),
    }

    return returnResponse, 200


##### MANGA FUNCTIONS #####


# Search an Manga
def getSearchedManga(query="", limit=12):
    path = f"?q={query}&limit={limit}"

    serverResponse = mangaBase(path)
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
            "image": getImageFromImages(item.get("images", {})).get(
                "large_image_url", ""
            ),
            "type": item.get("type"),
            "status": item.get("status"),
            "published": {
                "from": item.get("published", {}).get("from"),
                "to": item.get("published", {}).get("to"),
                "string": item.get("published", {}).get("string"),
            },
            "score": item.get("score"),
            "scored_by": item.get("scored_by"),
        }

        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Filtered Anime
def getFilteredManga(
    query="",
    filters={
        "type": "",
        "status": "",
        "rating": "",
        "genres": "",
    },
    sfw="true",
    min_score=1,
    max_score="",
    page=1,
    limit=20,
    order_by="",
    start_date="",
    end_date="",
):
    if type(filters) is not dict:
        filters = {}

    filters.update(
        {"order_by": order_by, "start_date": start_date, "end_date": end_date}
    )
    path = f"?q={query}&page={page}&limit={limit}&sfw={sfw}&min_score={min_score}&max_score={max_score}"

    for key, value in filters.items():
        if value == "":
            continue
        path += f"&{key}={value}"

    serverResponse = mangaBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    serverPagination = serverResponse.get("pagination", {})
    pagination = {
        "has_next_page": serverPagination.get("has_next_page"),
        "pages_count": serverPagination.get("last_visible_page"),
        "total_count": serverPagination.get("items", {}).get("total"),
        "current_count": serverPagination.get("items", {}).get("count"),
    }

    returnResponse = {
        "success": True,
        "pagination": pagination,
        "data": [],
    }

    for item in serverData:
        data = {
            "id": item.get("mal_id"),
            "title": item.get("title"),
            "title_english": item.get("title_english", ""),
            "title_japanese": item.get("title_japanese", ""),
            "synopsis": item.get("synopsis"),
            "chapters": item.get("chapters"),
            "volumes": item.get("volumes"),
            "image": getImageFromImages(item.get("images", {})).get("image_url"),
            "type": item.get("type"),
            "source": item.get("source"),
            "status": item.get("status"),
            "published": {
                "from": item.get("published", {}).get("from"),
                "to": item.get("published", {}).get("to"),
                "string": item.get("published", {}).get("string"),
            },
            "mal_rank": item.get("rank"),
            "score": item.get("score"),
            "scored_by": item.get("scored_by"),
            "authors": replaceProperty(
                removeProperty(item.get("authors", []), ["url"]), "mal_id", "id"
            ),
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


# Get Manga Statistics
def getMangaStatistics(id):
    path = f"/{id}/statistics"

    serverResponse = mangaBase(path)
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


# Get Manga Details
def getMangaDetails(id):
    path = f"/{id}/full"

    serverResponse = mangaBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    statistics, _ = getMangaStatistics(id)

    mangaData = {
        "id": serverData.get("mal_id"),
        "title": serverData.get("title"),
        "title_english": serverData.get("title_english"),
        "title_japanese": serverData.get("title_japanese"),
        "titles": serverData.get("titles", []),
        "image": getImageFromImages(serverData.get("images", {})).get("image_url"),
        "image_large": getImageFromImages(serverData.get("images", {})).get(
            "large_image_url"
        ),
        "banner": getAnilistMangaBanner(serverData.get("title")),
        "chapters": serverData.get("chapters"),
        "volumes": serverData.get("volumes"),
        "type": serverData.get("type"),
        "status": serverData.get("status"),
        "synopsis": serverData.get("synopsis"),
        "background": serverData.get("background"),
        "published": serverData.get("published"),
        "score": serverData.get("score"),
        "scored_by": serverData.get("scored_by"),
        "mal_rank": serverData.get("rank"),
        "popularity": serverData.get("popularity"),
        "members": serverData.get("members"),
        "favorites": serverData.get("favorites"),
        "statistics": statistics.get("data", {}),
        "authors": replaceProperty(
            removeProperty(serverData.get("authors", {}), "url"), "mal_id", "id"
        ),
        "genres": replaceProperty(
            removeProperty(serverData.get("genres", {}), "url"), "mal_id", "id"
        ),
        "themes": replaceProperty(
            removeProperty(serverData.get("themes", {}), "url"), "mal_id", "id"
        ),
        "related": replaceProperty(
            removeProperty(serverData.get("relations", {}), "url"), "mal_id", "id"
        ),
        "external": serverData.get("external", []),
    }

    returnResponse = {"success": True, "data": mangaData}

    return returnResponse, 200


# Get Manga Characters
def getMangaCharacters(id):
    path = f"/{id}/characters"

    serverResponse = mangaBase(path)
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

        data = {
            "id": character.get("mal_id", ""),
            "name": character.get("name"),
            "image": getImageFromImages(character.get("images", {})).get("image_url"),
            "role": item.get("role"),
        }

        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Manga Imaged
def getMangaPictures(id):
    path = f"/{id}/pictures"

    serverResponse = mangaBase(path)
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


# Get Manga Reviews
def getMangaReviews(id, page=1, spoilers="false", preliminary="true"):
    path = f"/{id}/reviews?page={page}&spoilers={spoilers}&preliminary={preliminary}"

    serverResponse = mangaBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    pagination = {
        "has_next_page": True if not len(serverData) < 20 else False,
    }

    returnResponse = {
        "success": True,
        "pagination": pagination,
        "data": [],
    }

    for item in serverData:
        data = replaceProperty(removeProperty(item, ["url"]), "mal_id", "id")
        user = data.get("user", {})
        image = getImageFromImages(user.get("images", {})).get("image_url")
        user = removeProperty(user, ["url", "images"])
        user["image"] = image

        data["user"] = user

        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Manga Recommendations of an Manga Watchers
def getMangaRecommendations(id):
    path = f"/{id}/recommendations"

    serverResponse = mangaBase(path)
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


# Get Manga Genres
def getMangaGenres():
    path = f"/manga"

    serverResponse = genresBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    returnResponse = {
        "success": True,
        "data": replaceProperty(removeProperty(serverData, "url"), "mal_id", "id"),
    }

    return returnResponse, 200


##### STUDIOS FUNCTIONS #####


# Get Manga Details
def getStudioDetails(id):
    path = f"/{id}/full"

    serverResponse = studioBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    mangaData = {
        "id": serverData.get("mal_id"),
        "title": (serverData.get("titles")[0 : 0 + 1] or [{}])[0].get("title"),
        "titles": [x.get("title") for x in serverData.get("titles", [])],
        "image": getImageFromImages(serverData.get("images", {})).get("image_url"),
        "about": serverData.get("about"),
        "favorites": serverData.get("favorites"),
        "count": serverData.get("count"),
        "external": serverData.get("external", []),
    }

    returnResponse = {"success": True, "data": mangaData}

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
            "nicknames": [
                serverData.get("name_kanji"),
                *serverData.get("nicknames", []),
            ],
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


# Get Anime Character Pictures
def getCharacterPictures(id):
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


##### STAFFS FUNCTIONS #####


# Get Anime Staff Details
def getStaffDetails(id):
    path = f"/{id}/full"

    serverResponse = staffBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    returnResponse = {
        "success": True,
        "data": {
            "id": serverData.get("mal_id"),
            "name": serverData.get("name"),
            "image": getImageFromImages(serverData.get("images", {})).get("image_url"),
            "nicknames": [
                serverData.get("given_name"),
                serverData.get("family_name"),
                *serverData.get("alternate_names", []),
            ],
            "favorites": serverData.get("favorites"),
            "birthday": serverData.get("birthday"),
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
            "position": item.get("position"),
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
            "position": item.get("position"),
            "title": manga.get("title"),
            "image": getImageFromImages(manga.get("images", {})).get("image_url"),
            "large_image": getImageFromImages(manga.get("images", {})).get(
                "large_image_url"
            ),
        }

        returnResponse["data"]["manga"].append(data)

    for item in serverData["voices"]:
        anime = item.get("anime", {})
        character = item.get("character", {})

        data = {
            "id": character.get("mal_id"),
            "role": item.get("role"),
            "title": anime.get("title"),
            "name": character.get("name"),
            "image": getImageFromImages(character.get("images", {})).get("image_url"),
            "anime_image": getImageFromImages(anime.get("images", {})).get("image_url"),
        }

        returnResponse["data"]["voices"].append(data)

    return returnResponse, 200


# Get Anime Staff Imaged
def getStaffPictures(id):
    path = f"/{id}/pictures"

    serverResponse = staffBase(path)
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
def getSeasonalAnime(year, season="", filter="", continuing="false", limit=20, page=1):
    if year in ["now", "upcoming"]:
        prefix = year
    else:
        prefix = f"{year}/{season}"

    path = (
        f"/{prefix}?filter={filter}&continuing={continuing}&limit={limit}&page={page}"
    )

    serverResponse = seasonsBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    serverPagination = serverResponse.get("pagination", {})
    pagination = {
        "has_next_page": serverPagination.get("has_next_page"),
        "pages_count": serverPagination.get("last_visible_page"),
        "total_count": serverPagination.get("items", {}).get("total"),
        "current_count": serverPagination.get("items", {}).get("count"),
    }
    returnResponse = {
        "success": True,
        "pagination": pagination,
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
            "duration": getDuration(item.get("duration")),
            "image": getImageFromImages(item.get("images", {})).get("large_image_url"),
            "type": item.get("type"),
            "source": item.get("source"),
            "status": item.get("status"),
            "aired": {
                "from": item.get("aired", {}).get("from"),
                "to": item.get("aired", {}).get("to"),
                "string": item.get("aired", {}).get("string"),
            },
            "mal_rank": item.get("rank"),
            "year": (
                item.get("year")
                if not item.get("year") == None
                else item.get("aired", {})
                .get("prop", {})
                .get("from", {})
                .get("year", "")
            ),
            "season": item.get("season"),
            "score": item.get("score"),
            "scored_by": item.get("scored_by"),
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
def getTopAnime(anime_type="", filter="", page=1, limit=25):
    path = f"/anime?type={anime_type}&filter={filter}&page={page}&limit={limit}"

    serverResponse = topBase(path)
    if not serverResponse["success"]:
        return serverResponse, 500
    serverData = serverResponse.get("data")

    if not serverData:
        return {
            "success": False,
            "message": serverResponse.get("error", "Item not Found"),
        }, serverResponse.get("status", 404)

    serverPagination = serverResponse.get("pagination", {})
    pagination = {
        "has_next_page": serverPagination.get("has_next_page"),
        "pages_count": serverPagination.get("last_visible_page"),
        "total_count": serverPagination.get("items", {}).get("total"),
        "current_count": serverPagination.get("items", {}).get("count"),
    }

    returnResponse = {
        "success": True,
        "pagination": pagination,
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
            "duration": getDuration(item.get("duration")),
            "image": getImageFromImages(item.get("images", {})).get("large_image_url"),
            "type": item.get("type"),
            "source": item.get("source"),
            "status": item.get("status"),
            "aired": {
                "from": item.get("aired", {}).get("from"),
                "to": item.get("aired", {}).get("to"),
                "string": item.get("aired", {}).get("string"),
            },
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
            "scored_by": item.get("scored_by"),
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

    serverPagination = serverResponse.get("pagination", {})
    pagination = {
        "has_next_page": serverPagination.get("has_next_page"),
        "pages_count": serverPagination.get("last_visible_page"),
        "total_count": serverPagination.get("items", {}).get("total"),
        "current_count": serverPagination.get("items", {}).get("count"),
    }

    returnResponse = {
        "success": True,
        "pagination": pagination,
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

    serverPagination = serverResponse.get("pagination", {})
    pagination = {
        "has_next_page": serverPagination.get("has_next_page"),
        "pages_count": serverPagination.get("last_visible_page"),
        "total_count": serverPagination.get("items", {}).get("total"),
        "current_count": serverPagination.get("items", {}).get("count"),
    }
    returnResponse = {
        "success": True,
        "pagination": pagination,
        "data": [],
    }

    for item in serverData:
        data = {
            "id": item.get("mal_id"),
            "title": item.get("title"),
            "title_english": item.get("title_english", ""),
            "title_japanese": item.get("title_japanese", ""),
            "synopsis": item.get("synopsis"),
            "chapters": item.get("chapters"),
            "volumes": item.get("volumes"),
            "image": getImageFromImages(item.get("images", {})).get("image_url"),
            "type": item.get("type"),
            "source": item.get("source"),
            "status": item.get("status"),
            "published": {
                "from": item.get("published", {}).get("from"),
                "to": item.get("published", {}).get("to"),
                "string": item.get("published", {}).get("string"),
            },
            "mal_rank": item.get("rank"),
            "score": item.get("score"),
            "scored_by": item.get("scored_by"),
            "authors": replaceProperty(
                removeProperty(item.get("authors", []), ["url"]), "mal_id", "id"
            ),
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

    returnResponse = {
        "success": True,
        "frameCount": response.get("frameCount"),
        "data": [],
    }

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


# Get Waifu Image Types and Categories
def getWaifuImgCategories():
    url = f"{WAIFU_BASE}/endpoints"

    try:
        serverResponse = requests.get(url).json()
    except Exception as e:
        return {"success": False, "error": str(e)}, 500

    returnResponse = {"success": True, "data": []}

    for type, categories in serverResponse.items():
        data = {"type": type, "categories": categories}

        returnResponse["data"].append(data)

    return returnResponse, 200


# Get Waifu Pictures
def getWaifuPictures(image_type="sfw", category="waifu", limit=20):
    url = f"{WAIFU_BASE}/many/{image_type}/{category}"

    try:
        limit = int(limit)
    except Exception as e:
        limit = 20

    if limit > 30:
        limit = 30
    elif limit < 1:
        limit = 1

    try:
        serverResponse = requests.post(url, json={}).json()
    except Exception as e:
        return {"success": False, "error": str(e)}, 500

    returnResponse = {"success": True, "data": serverResponse["files"][:limit]}

    return returnResponse, 200


# Compare Voice Artists
def getVoiceArtistsCompared(anime_01_id, anime_02_id, language="Japanese"):
    anime_01_characters, status_01 = getAnimeCharacters(anime_01_id)
    anime_02_characters, status_02 = getAnimeCharacters(anime_02_id)

    if not status_01 == 200:
        return anime_01_characters, status_01

    if not status_02 == 200:
        return anime_02_characters, status_02

    try:
        commonVoiceArtists, unCommonVoiceArtists = compareVoiceArtists(
            anime_01_characters.get("data"),
            anime_02_characters.get("data"),
            dataset_01_anime_id=anime_01_id,
            dataset_02_anime_id=anime_02_id,
            language=language,
        )
    except Exception as e:
        return {"success": False, "message": str(e)}, 500

    returnResponse = {
        "success": True,
        "data": {
            "commonVoiceArtists": commonVoiceArtists,
            "unCommonVoiceArtists": unCommonVoiceArtists,
        },
    }

    return returnResponse, 200


##### EXTRA Functions #####
# Get homepage Anime
def getHomepageAnime(limit=6):
    # Trending, Top Season, Upcoming, All time top
    trendingAnime, _ = getFilteredAnime(
        filters={"status": "airing"}, order_by="popularity", limit=limit
    )
    time.sleep(0.3)
    topSeasonAnime, _ = getSeasonalAnime("now", limit=limit)
    time.sleep(0.3)

    currentYear = topSeasonAnime.get("data", [{}])[0].get("year", 2024)
    currentSeason = topSeasonAnime.get("data", [{}])[0].get("season", "")

    try:
        nextYear, nextSeason = getNextSeason(currentYear, currentSeason)
    except Exception as e:
        print(str(e))
        nextYear = "upcoming"
        nextSeason = ""

    upcomingAnime, _ = getSeasonalAnime(nextYear, nextSeason, limit=limit)
    time.sleep(0.3)

    popularTvSeries, _ = getFilteredAnime(
        filters={"type": "tv"}, order_by="popularity", limit=limit
    )
    time.sleep(0.3)
    popularMovies, _ = getFilteredAnime(
        filters={"type": "movie"}, order_by="popularity", limit=limit
    )

    returnData = [
        {
            "heading": "Trending Now",
            "path": "/search/anime/trending",
            "data": trendingAnime.get("data", []),
        },
        {
            "heading": "Popular This Season",
            "path": f"/search/anime/seasons/{currentYear}/{currentSeason}",
            "data": topSeasonAnime.get("data", []),
        },
        {
            "heading": "Upcoming",
            "path": f"/search/anime/seasons/{nextYear}/{nextSeason}",
            "data": upcomingAnime.get("data", []),
        },
        {
            "heading": "Popular TV Series",
            "path": "/search/anime/tv-series/popular",
            "data": popularTvSeries.get("data", []),
        },
        {
            "heading": "Popular Movies",
            "path": "/search/anime/movies/popular",
            "data": popularMovies.get("data", []),
        },
    ]

    return {"success": True, "data": returnData}, 200


# Get Anime Filters
def getAnimeFilters():
    genres, _ = getAnimeGenres()
    serverSeasons, _ = getSeasonList()
    seasons = ["winter", "spring", "summer", "fall"]
    years = [x.get("year") for x in serverSeasons.get("data", [{}])]

    animeType = [
        {"value": "tv", "label": "TV Series"},
        {"value": "movie", "label": "Movie"},
        {"value": "special", "label": "Specials"},
        {"value": "ova", "label": "OVA"},
        {"value": "ona", "label": "ONA"},
        {"value": "music", "label": "Music"},
        {"value": "tv_special", "label": "TV Specials"},
        {"value": "cm", "label": "CM"},
        {"value": "pv", "label": "PV"},
    ]
    status = [
        {"value": "airing", "label": "Airing"},
        {"value": "complete", "label": "Completed"},
        {"value": "upcoming", "label": "Upcoming"},
    ]

    returnResponse = {
        "success": True,
        "data": {
            "genres": replaceProperty(
                replaceProperty(genres.get("data", []), "id", "value"), "name", "label"
            ),
            "years": years,
            "seasons": seasons,
            "type": animeType,
            "status": status,
        },
    }

    return returnResponse, 200


# Get homepage Manga
def getHomepageManga(limit=6):
    # Trending Manga, Manhwa, Light Novels
    trendingManga, _ = getFilteredManga(
        filters={"status": "publishing", "type": "manga"},
        order_by="popularity",
        limit=limit,
    )
    trendingManhwa, _ = getFilteredManga(
        filters={"status": "publishing", "type": "manhwa"},
        order_by="popularity",
        limit=limit,
    )
    trendingLightNovels, _ = getFilteredManga(
        filters={"status": "publishing", "type": "lightnovel"},
        order_by="popularity",
        limit=limit,
    )

    returnData = [
        {
            "heading": "Trending Manga",
            "path": "/search/manga/trending",
            "data": trendingManga.get("data", []),
        },
        {
            "heading": "Trending Manhwa",
            "path": "/search/manga/trending/manhwa",
            "data": trendingManhwa.get("data", []),
        },
        {
            "heading": "Trending Light Novels",
            "path": "/search/manga/trending/light-novel",
            "data": trendingLightNovels.get("data", []),
        },
    ]

    return {"success": True, "data": returnData}, 200


# Get Manga Filters
def getMangaFilters():
    genres, _ = getMangaGenres()

    animeType = [
        {"value": "manga", "label": "Manga"},
        {"value": "novel", "label": "Novel"},
        {"value": "lightnovel", "label": "Light Novel"},
        {"value": "oneshot", "label": "One-shot"},
        {"value": "doujin", "label": "Doujin"},
        {"value": "manhwa", "label": "Manhwa"},
        {"value": "manhua", "label": "Manhua"},
    ]
    status = [
        {"value": "publishing", "label": "Publishing"},
        {"value": "complete", "label": "Complete"},
        {"value": "hiatus", "label": "Hiatus"},
        {"value": "discontinued", "label": "Discontinued"},
        {"value": "upcoming", "label": "Upcoming"},
    ]

    returnResponse = {
        "success": True,
        "data": {
            "genres": replaceProperty(
                replaceProperty(genres.get("data", []), "id", "value"), "name", "label"
            ),
            "type": animeType,
            "status": status,
        },
    }

    return returnResponse, 200


# Get HTML data of Schedule and convert!
def getAnimeSchedule(season="", year="", anime_type="tv", sortby="popularity"):
    if season == "" or year == "":
        serverResponse = schedules.getCurrentSeasonAnimeScheduled(
            type=anime_type, sortby=sortby
        )
    else:
        serverResponse = schedules.getAnimeScheduleOfSeason(
            season=season, year=year, type=anime_type, sortby=sortby
        )
    if not serverResponse.get("success"):
        return serverResponse, 500

    returnResponse = {"success": True, "data": []}

    # Filter the Items which has finished Releasing
    for item in serverResponse.get("data", []):
        if type(item.get("next", {}).get("timestamp")) is str:
            continue

        returnResponse["data"].append(item)

    return returnResponse, 200


# Get Anime data of from now to given Hour. But if today is given, calculate the hours remaining
def getAnimeOfHours(hours="today"):
    if hours == "today":
        now = datetime.now()
        end_of_day = datetime.combine(
            now.date() + timedelta(days=1), datetime.min.time()
        )
        remaining_time = end_of_day - now
        hours = remaining_time.total_seconds() // 3600

    returnResponse = schedules.getAnimeScheduleOfNextHours(hours=hours)

    return returnResponse, 200 if returnResponse.get("success") is True else 500
