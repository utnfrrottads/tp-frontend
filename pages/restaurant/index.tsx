import React from 'react'
import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'
import { Avatar, Container, Grid } from '@mui/material'
import styles from '../../styles/Home.module.css'

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
    <div className={styles.container}>
      {data.map((restaurant: any) => (
        // eslint-disable-next-line no-underscore-dangle
        <a href={`restaurant/${restaurant._id}`}>
          <Container
            maxWidth="md"
            sx={{
              border: 1,
              borderRadius: '15px',
              marginTop: '2em'
            }}
          >
            <Grid container columnSpacing={10} padding="2em">
              <Grid item xs={8}>
                <Grid container flexDirection="column" rowSpacing={4}>
                  <Grid item>{restaurant.name}</Grid>
                  <Grid item>{restaurant.description}</Grid>
                  <Grid item>
                    TODO: calcular precio y demora en base a distancia
                    user-restaurant
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Avatar
                  src={restaurant.image}
                  alt={`${restaurant.name} logo`}
                />
              </Grid>
            </Grid>
          </Container>
        </a>
      ))}
    </div>
  )
}

export default RestaurantHomePage
