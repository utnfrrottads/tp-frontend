import React from 'react'
import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography
} from '@mui/material'

const requestOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
}

const url = process.env.NEXT_PUBLIC_API_URL

const useRestaurants = () => {
  return useQuery(['restaurants-query'], async () => {
    return (await fetch(`${url}/restaurants/`, requestOptions)).json()
  })
}

const RestaurantHomePage: NextPage = () => {
  const { error, data, isLoading, isError } = useRestaurants()

  if (isLoading) return <span>Loading ...</span>

  if (isError) return <span>Error: {(error as Error).message}</span>

  return (
    <Container maxWidth="md">
      {data.map((restaurant: any) => (
        // eslint-disable-next-line no-underscore-dangle
        <a href={`restaurant/${restaurant._id}`}>
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
                  TODO: calcular precio y demora en base a distancia
                  user-restaurant
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </a>
      ))}
    </Container>
  )
}

export default RestaurantHomePage
