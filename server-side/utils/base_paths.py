import requests

# GLOBAL Variables
JIKAN_BASE = "https://api.jikan.moe/v4"
WAIFU_BASE = "https://api.waifu.pics/"
ANILIST_BASE = "https://graphql.anilist.co"


# Base Path
def basePath(path):
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
    response = basePath(path)

    return response


# Anime Characters Info Base
def charactersBase(path=""):
    path = f"characters{path}"
    response = basePath(path)

    return response


# Anime Seasons Info Base
def seasonsBase(path=""):
    path = f"seasons{path}"
    response = basePath(path)

    return response


# Anime Top Info Base
def topBase(path="anime"):
    path = f"top{path}"
    response = basePath(path)

    return response


# Anilist GraphQL
def anilistBase(json):
    try:
        response = requests.post(ANILIST_BASE, json=json).json()
    except Exception as e:
        return {"success": False, "error": str(e)}

    response["success"] = True
    return response
