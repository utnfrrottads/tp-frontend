import getManhattanDistanceInKm from './getManhattanDistanceInKm'
import getTimeToTravel from './getTimeToTravel'

const getDeliveryTime = (location: any, restaurant: any): string => {
  const timeToPrepareFood = 15
  const distance = getManhattanDistanceInKm(location, restaurant.location)
  const time = getTimeToTravel(distance) + timeToPrepareFood

  return `${Math.floor(time)} - ${Math.floor(time + time * 0.5)} mins`
}

export default getDeliveryTime
