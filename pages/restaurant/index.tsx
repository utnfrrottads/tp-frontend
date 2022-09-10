import React, { useState } from 'react'
import type { GetServerSideProps } from 'next'
import { Container, TextField } from '@mui/material'
import RestaurantCard from '../../components/RestaurantCard'

const url = process.env.NEXT_PUBLIC_API_URL

interface Props {
  initialRestaurants: any[]
}
const RestaurantHomePage = ({ initialRestaurants }: Props) => {
  const [restaurants] = useState(initialRestaurants)
  const [filter, setFilter] = useState('')

  return (
    <Container maxWidth="md" sx={{ marginY: '2em' }}>
      <TextField
        id="filter"
        name="filter"
        onChange={e => setFilter(e.currentTarget.value.toLowerCase())}
        label="Search for restaurants"
        fullWidth
      />

      {restaurants
        .filter(restaurant => restaurant.name.toLowerCase().includes(filter))
        .map((restaurant: any) => (
          // eslint-disable-next-line no-underscore-dangle
          <a href={`restaurant/${restaurant._id}`}>
            <RestaurantCard restaurant={restaurant} />
          </a>
        ))}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(`${url}/restaurants/`, requestOptions)
  const data = await response.json()
  return {
    props: {
      initialRestaurants: data
    }
  }
}

export default RestaurantHomePage
