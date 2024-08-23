from .base_paths import *

# Search an Anime
def searchAnime(query = "", limit=12):
    path = f"?q={query}&limit={limit}"
    
    searchResponse = animeBase(path)
    if (not searchResponse["success"]): return searchResponse
    
    returnResponse = {
        "success": True,
        "data": []
    }
    
    for item in searchResponse["data"]:
        data = {
            "id": item.get("mal_id"),
            "title": item.get("title"),
            "title_english": item.get("title_english", ""),
            "title_japanese": item.get("title_japanese", ""),
            "thumbnail": item.get("images", {}).get("jpg", {}).get("small_image_url", ""),
            "type": item.get("type"),
            "status": item.get("status"),
            "year": item.get("year") if not item.get("year") == None else item.get("aired", {}).get("prop", {}).get("from", {}).get("year", ""),
            "score": item.get("score")
        }
        
        returnResponse["data"].append(data)
    
    return returnResponse


# Get Anime Data
def getAnime(
        filters = {
            "q": "",
            "type": "",
            "status": "",
            "rating": "",
            "genres": ""
        },
        page = 1,
        limit = 20,
        order_by = "",
        start_date = "",
        end_date = ""
):
    path = f"?page={page}&limit={limit}&order_by={order_by}&start_date={start_date}&end_date={end_date}"
    
    for key, value in enumerate(filters):
        if (value == ""): continue
        path += f"&{key}={value}"
    
    animeResponse = animeBase(path)
    return animeResponse
