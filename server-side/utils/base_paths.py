import requests
from requests_html import HTMLSession


# GLOBAL Variables
JIKAN_BASE = "https://api.jikan.moe/v4"
WAIFU_BASE = "https://api.waifu.pics/"
ANILIST_BASE = "https://graphql.anilist.co"
LIVECHART_BASE = "https://www.livechart.me/"


# Base Path
def jikanBasePath(path):
    url = f"{JIKAN_BASE}/{path}"
    try:
        response = requests.get(url).json()
    except Exception as e:
        return {"success": False, "error": str(e)}

    response["success"] = True
    return response


# Anime Info Base Path
def animeBase(path=""):
    path = f"anime{path}"
    response = jikanBasePath(path)

    return response


# Anime Info Base Path
def mangaBase(path=""):
    path = f"manga{path}"
    response = jikanBasePath(path)

    return response


# Anime Info Base Path
def studioBase(path=""):
    path = f"producers{path}"
    response = jikanBasePath(path)

    return response


# Anime Characters Info Base
def charactersBase(path=""):
    path = f"characters{path}"
    response = jikanBasePath(path)

    return response


# Anime Staff Info Base
def staffBase(path=""):
    path = f"people{path}"
    response = jikanBasePath(path)

    return response


# Anime Characters Info Base
def genresBase(path=""):
    path = f"genres{path}"
    response = jikanBasePath(path)

    return response


# Anime Seasons Info Base
def seasonsBase(path=""):
    path = f"seasons{path}"
    response = jikanBasePath(path)

    return response


# Anime Top Info Base
def topBase(path="anime"):
    path = f"top{path}"
    response = jikanBasePath(path)

    return response


# Anilist GraphQL
def anilistBase(json):
    try:
        response = requests.post(ANILIST_BASE, json=json).json()
    except Exception as e:
        return {"success": False, "error": str(e)}

    response["success"] = True
    return response


# Live Chart (HTML Scrapper)
def livechartBase(path="", cookies={}):
    path = f"{LIVECHART_BASE}{path}"

    try:
        response = HTMLSession().get(path, cookies=cookies)
    except Exception as e:
        return {"success": False, "error": str(e)}

    response = {"success": True, "obj": response}

    return response
