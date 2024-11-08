export function getSkills({ special = [] } = {}) {
  return special.map(({ description = "Description unavailable", ...skills   }) => {
    return {
         ...skills, 
         description
    }
  })
}