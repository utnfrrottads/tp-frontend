const getManhattanDistanceInKm = (location1: any, location2: any) => {
  const lat1 = location1.latitude
  const lon1 = location1.longitude
  const lat2 = location2.latitude
  const lon2 = location2.longitude
  let R = 6371 // Radius of the earth in km
  let dLat = deg2rad(lat2 - lat1) // deg2rad below
  let dLon = deg2rad(lon2 - lon1)

  let latA = Math.sin(dLat / 2) ** 2
  let latC = 2 * Math.atan2(Math.sqrt(latA), Math.sqrt(1 - latA))
  let latitudeDistance = R * latC // Distance in km

  let longA = Math.sin(dLon / 2) ** 2
  let longC = 2 * Math.atan2(Math.sqrt(longA), Math.sqrt(1 - longA))
  let longitudeDistance = R * longC // Distance in km

  return latitudeDistance + longitudeDistance
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180)
}

export default getManhattanDistanceInKm
