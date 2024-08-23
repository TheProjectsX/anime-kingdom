def removeProperty(obj, property):
    new_obj = obj.copy()
    
    if (type(new_obj) is list):
        for i in range(len(new_obj)):
            try:
                del new_obj[i][property]
            except Exception as e:
                pass
    else:
        del new_obj[property]
        
    return new_obj
