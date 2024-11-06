export function getSkills(obj) {
    let result = []
    
    for (const skill in obj.special) {
      let temp_obj = {}
      const {id, name, icon, description = "Description unavailable"} = obj.special[skill]
    
      temp_obj.id = id
      temp_obj.name = name
      temp_obj.icon = icon
      temp_obj.description = description
  
      result.push(temp_obj)
    }
    
    return result
  }