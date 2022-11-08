import React, { useState } from 'react'
import type { NextPageContext } from 'next'
import { Box } from '@mui/system'
import { InfoOutlined, Star, Store } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid
} from '@mui/material'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import withAuth from '../utils/withAuth'

const url = process.env.NEXT_PUBLIC_API_URL

interface Props {
    initialOrders: any[]
    tags: any[]
    auth: Auth
}

const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
}

const OrderHomePage = ({ initialOrders, auth }: any) => {

    const [orders, setOrders] = useState(initialOrders)

    return (
        <Layout auth={auth}>
            <Container maxWidth="xl" sx={{ marginY: '2em' }}>
                <Grid container spacing={4}>
                    <Grid item xs={2} />
                    <Grid item xs={6}>
                        <h1>Orders</h1>
                        {orders.map((order: any) => (
                            <Card sx={{ marginBottom: '1em' }}>
                                <CardActionArea>
                                    <CardContent>
                                        <h2>{order.restaurant.name}</h2>
                                        <h2>{order.meals}</h2>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export const getServerSideProps = withAuth(async (auth: Auth | null) => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    const orderResponse = await fetch(`${url}/orders/`, requestOptions)
    const orderData = await orderResponse.json()

    return {
        props: {
          initialOrders: orderData,
          auth
        }
    }

}, false)

export default OrderHomePage