import React, { useState } from 'react'
import { Container, Grid, TextField, Box, Typography } from '@mui/material'
import Link from 'next/link'
import withAuth from '../../utils/withAuth'
import RestaurantCard from '../../components/RestaurantCard'
import TagCard from '../../components/TagCard'
import Layout from '../../components/Layout/Layout'

const url = process.env.NEXT_PUBLIC_API_URL

interface Props {
  initialRestaurants: any[]
  tags: any[]
  auth: Auth
}

const RestaurantHomePage = ({ initialRestaurants, tags, auth }: Props) => {
  const [restaurants, setRestaurants] = useState(initialRestaurants)
  const [filter, setFilter] = useState('')

  const location: any = {
    street: 'Ayacucho',
    number: '1234',
    floor: 5,
    apartment: 'A',
    latitude: '-32.958153728617546',
    longitude: '-60.629393413931275'
  }

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
    <Layout auth={auth}>
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
            <Grid item xs={2} />
            <Grid item xs={6}>
              {restaurants.length > 0 &&
                restaurants
                  .filter(restaurant =>
                    restaurant.name.toLowerCase().includes(filter)
                  )
                  .map((restaurant: any) => {
                    // eslint-disable-next-line no-underscore-dangle
                    const ref = `restaurant/${restaurant._id}`
                    return (
                      <Link href={ref} passHref>
                        <a href={ref}>
                          <RestaurantCard
                            restaurant={restaurant}
                            userLocation={location}
                          />
                        </a>
                      </Link>
                    )
                  })}
            </Grid>
            <Grid item>
              <Typography variant="h4">Categorias</Typography>
              {tags.length > 0 &&
                tags.map((tag: any) => (
                  <Box onClick={() => setRestaurantsByTag(tag)}>
                    <TagCard tag={tag} />
                  </Box>
                ))}
            </Grid>
          </Grid>
        </Container>
      </>
    </Layout>
  )
}

export const getServerSideProps = withAuth(async (auth: Auth | null) => {
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
      tags: tagData,
      auth
    }
  }
}, false)

export default RestaurantHomePage
