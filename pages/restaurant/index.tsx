import React, { useState } from 'react'
import type { GetServerSideProps } from 'next'
import { Container, Grid, TextField, Box, Typography } from '@mui/material'
import RestaurantCard from '../../components/RestaurantCard'
import TagCard from '../../components/TagCard'

const url = process.env.NEXT_PUBLIC_API_URL

interface Props {
  initialRestaurants: any[]
  tags: any[]
}

const RestaurantHomePage = ({ initialRestaurants, tags }: Props) => {
  const [restaurants, setRestaurants] = useState(initialRestaurants)
  const [filter, setFilter] = useState('')

  const setRestaurantsByTag = async (tag: any) => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    const data = await // eslint-disable-next-line no-underscore-dangle
    (await fetch(`${url}/restaurants/?tag=${tag._id}`, requestOptions)).json()
    setRestaurants(data)
  }
  return (
    <>
      <Container maxWidth="md" sx={{ marginY: '2em' }}>
        <TextField
          id="filter"
          name="filter"
          onChange={e => setFilter(e.currentTarget.value.toLowerCase())}
          label="Search for restaurants"
          fullWidth
        />
      </Container>
      <Container maxWidth="xl" sx={{ marginY: '2em' }}>
        <Grid container spacing={4}>
          <Grid item xs={2}>
            <Box bgcolor="black" color="white" padding="2rem">
              {' '}
              TODO: informacion del pedido actual
            </Box>
          </Grid>
          <Grid item xs={6}>
            {restaurants
              .filter(restaurant =>
                restaurant.name.toLowerCase().includes(filter)
              )
              .map((restaurant: any) => (
                // eslint-disable-next-line no-underscore-dangle
                <a href={`restaurant/${restaurant._id}`}>
                  <RestaurantCard restaurant={restaurant} />
                </a>
              ))}
          </Grid>
          <Grid item>
            <Typography variant="h4">Categorias</Typography>
            {tags.map((tag: any) => (
              <Box onClick={() => setRestaurantsByTag(tag)}>
                <TagCard tag={tag} />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const restaurantResponse = await fetch(`${url}/restaurants/`, requestOptions)
  const restaurantData = await restaurantResponse.json()

  const tagResponse = await fetch(`${url}/tags/`, requestOptions)
  const tagData = await tagResponse.json()

  return {
    props: {
      initialRestaurants: restaurantData,
      tags: tagData
    }
  }
}

export default RestaurantHomePage
