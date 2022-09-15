import getManhattanDistanceInKm from './getManhattanDistanceInKm'

const getPrice = (location: any, restaurant: any): string => {
  const distance = getManhattanDistanceInKm(location, restaurant.location)
  console.log(distance)

  return `$ ${parseInt(
    restaurant.deliveryPricePerKm * distance + restaurant.deliveryPriceBase,
    10
  )}`
}

export default getPrice
