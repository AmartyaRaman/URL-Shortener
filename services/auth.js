const sessionIDToUserMap = new Map()

// Using map to group user and sessionID
function setUser(id, user) {
  sessionIDToUserMap.set(id, user)
} 

function getUser(id) {
  return sessionIDToUserMap.get(id)
}

export { setUser, getUser }