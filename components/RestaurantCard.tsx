import React from 'react'
import { Card, CardMedia, Box, CardContent, Typography } from '@mui/material'
import { getPrice } from '../utils/getPrice'
import { getDeliveryTime } from '../utils/getDeliveryTime'

interface Props {
  restaurant: any
  userLocation: any
}
const RestaurantCard = ({ restaurant, userLocation }: Props) => {
  return (
    <Card sx={{ display: 'flex', marginTop: '2rem' }}>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={restaurant.image}
        alt={`${restaurant.name} logo`}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {restaurant.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {restaurant.description}
          </Typography>
          <br />
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {getDeliveryTime(userLocation, restaurant)}
            <br />
            {getPrice(userLocation, restaurant)}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default RestaurantCard
