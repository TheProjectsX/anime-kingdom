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
