import re


# Remove property from Object
def removeProperty(obj, properties):
    new_obj = obj.copy()
    if isinstance(properties, str):
        properties = [properties]

    if isinstance(new_obj, list):
        for i in range(len(new_obj)):
            for property in properties:
                try:
                    del new_obj[i][property]
                except Exception as e:
                    pass
    elif isinstance(new_obj, dict):
        for property in properties:
            try:
                del new_obj[property]
            except Exception as e:
                pass

    return new_obj


# Replace Property name from Object
def replaceProperty(obj, oldKey, newKey):
    new_obj = obj.copy()

    if isinstance(new_obj, list):
        new_obj = [
            (
                {newKey if k == oldKey else k: v for k, v in item.items()}
                if isinstance(item, dict)
                else item
            )
            for item in new_obj
        ]
    elif isinstance(new_obj, dict):
        new_obj = {newKey if k == oldKey else k: v for k, v in new_obj.items()}

    return new_obj


# Get Image from Images
def getImageFromImages(images):
    jpg = images.get("jpg", {})
    if len(jpg.keys()) > 0:
        return jpg

    webp = images.get("webp", {})

    return webp


# Get Languages of an Anime Voice artists
def getUniqueVAALang(dataset):
    unique_languages = {}

    # Iterate through the dataset
    for character in dataset:
        for va in character.get("voice_actors", []):
            language = va.get("language")
            if language and language not in unique_languages:
                unique_languages[language] = None

    # Convert the keys of the OrderedDict to a list
    return list(unique_languages.keys())


# Get Duration from Text
def getDuration(text):
    if not text:
        return None

    numbers = [int(x) for x in re.findall(r"\d+", text)]

    if len(numbers) == 0:
        return None
    elif len(numbers) == 1:
        return numbers[0]
    else:
        return numbers


# Function to find common voice actors
def compareVoiceArtists(
    dataset_01, dataset_02, dataset_01_anime={}, dataset_02_anime={}, language=None
):
    voice_actors_01 = {}
    voice_actors_02 = {}

    # Create a map of voice actors to characters for dataset_01
    for character in dataset_01:
        anime = {
            "id": dataset_01_anime.get("id"),
            "title": (
                dataset_01_anime.get("title_english")
                if dataset_01_anime.get("title_english")
                else dataset_01_anime.get("title")
            ),
        }

        for va in character.get("voice_actors", []):
            if language and va.get("language", "").lower() != language.lower():
                continue  # Skip if the language does not match
            if va.get("id") not in voice_actors_01:
                voice_actors_01[va["id"]] = va
                voice_actors_01[va["id"]]["characters"] = []
            voice_actors_01[va["id"]]["characters"].append(
                {
                    "id": character.get("id"),
                    "name": character.get("name"),
                    "image": character.get("image"),
                    "role": character.get("role"),
                    "favorites": character.get("favorites"),
                    "anime": anime,
                }
            )

    # Create a map of voice actors to characters for dataset_02
    for character in dataset_02:
        anime = {
            "id": dataset_02_anime.get("id"),
            "title": (
                dataset_02_anime.get("title_english")
                if dataset_02_anime.get("title_english")
                else dataset_02_anime.get("title")
            ),
        }

        for va in character.get("voice_actors", []):
            if language and va.get("language", "").lower() != language.lower():
                continue  # Skip if the language does not match
            if va.get("id") not in voice_actors_02:
                voice_actors_02[va["id"]] = va
                voice_actors_02[va["id"]]["characters"] = []
            voice_actors_02[va["id"]]["characters"].append(
                {
                    "id": character.get("id"),
                    "name": character.get("name"),
                    "image": character.get("image"),
                    "role": character.get("role"),
                    "favorites": character.get("favorites"),
                    "anime": anime,
                }
            )

    # Prepare lists for common and uncommon voice actors
    common_voice_actors = []
    uncommon_voice_actors_01 = []
    uncommon_voice_actors_02 = []

    # Find common voice actors
    common_ids = voice_actors_01.keys() & voice_actors_02.keys()
    for va_id in common_ids:
        common_voice_actors.append(
            {
                "id": va_id,
                "name": voice_actors_01[va_id].get("name", "Unknown Name"),
                "language": voice_actors_01[va_id].get("language", "Unknown Language"),
                "image": voice_actors_01[va_id].get("image"),
                "characters": [
                    voice_actors_01[va_id].get("characters", []),
                    voice_actors_02[va_id].get("characters", []),
                ],
            }
        )

    # Voice actors unique to dataset_01
    for va_id in voice_actors_01.keys() - common_ids:
        uncommon_voice_actors_01.append(
            {
                "id": va_id,
                "name": voice_actors_01[va_id].get("name", "Unknown Name"),
                "language": voice_actors_01[va_id].get("language", "Unknown Language"),
                "image": voice_actors_01[va_id].get("image"),
                "characters": voice_actors_01[va_id].get("characters", []),
            }
        )

    # Voice actors unique to dataset_02
    for va_id in voice_actors_02.keys() - common_ids:
        uncommon_voice_actors_02.append(
            {
                "id": va_id,
                "name": voice_actors_02[va_id].get("name", "Unknown Name"),
                "language": voice_actors_02[va_id].get("language", "Unknown Language"),
                "image": voice_actors_02[va_id].get("image"),
                "characters": voice_actors_02[va_id].get("characters", []),
            }
        )

    return common_voice_actors, [uncommon_voice_actors_01, uncommon_voice_actors_02]


# Get Next Season
def getNextSeason(year, current_season):
    seasons = ["winter", "spring", "summer", "fall"]

    current_index = seasons.index(current_season.lower())

    next_index = (current_index + 1) % len(seasons)

    if next_index == 0:
        next_year = year + 1
    else:
        next_year = year

    next_season = seasons[next_index]

    return next_year, next_season
