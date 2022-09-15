/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type { NextPageContext } from 'next'
import { Box } from '@mui/system'
import { InfoOutlined, Star, Store } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid
} from '@mui/material'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/Layout/Layout'
import withAuth from '../../utils/withAuth'

const requestOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
}

const url = process.env.NEXT_PUBLIC_API_URL

const Restaurant = ({ restaurant: data, auth }: any) => {
  return (
    <Layout auth={auth}>
      <div className={styles.container}>
        <Box sx={{ marginBottom: 7 }}>
          <Box
            sx={{
              height: 233,
              background: '#22344f'
            }}
          />
          <Box
            component="img"
            sx={{
              width: 150,
              display: 'block',
              left: '132px',
              transform: 'translate(-40%, -65%)',
              position: 'absolute',
              borderRadius: '17px'
            }}
            src={data.image}
            alt={`${data.name} logo`}
          />
        </Box>

        <h1>{data.name}</h1>

        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          <Star style={{ opacity: 0.55, color: '#faaf00' }} />
          <p>4.2</p> |<p>Delivery: ${data.deliveryPriceBase}</p>
        </Box>

        <p>{data.description}</p>

        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          <Store style={{ opacity: 0.55 }} />
          {`${data.location.street} ${data.location.number}`}
          <Button
            type="button"
            onClick={() => window.alert(JSON.stringify(data.location, null, 2))}
          >
            <InfoOutlined style={{ opacity: 0.55 }} />
          </Button>
        </Box>

        {data.tags
          ? data.tags.map((m: any) => (
              // eslint-disable-next-line no-underscore-dangle
              <div key={m._id}>
                <p>{m.description}</p>
              </div>
            ))
          : 'No tags'}

        <div>
          {data.meals.length === 0 && (
            <Box sx={{ color: 'error.main' }}>No meals</Box>
          )}

          {data.meals && (
            <Grid container sx={{ gap: '30px' }}>
              {data.meals.map((m: any) => (
                // eslint-disable-next-line no-underscore-dangle
                <Grid item key={m._id}>
                  <Card sx={{ width: 345 }}>
                    <CardActionArea>
                      {m.img && (
                        <CardMedia
                          component="img"
                          height="140"
                          image={m.img}
                          alt={m.alt}
                        />
                      )}
                      <CardContent>
                        <h2>{m.name}</h2>
                        <p>{m.description}</p>
                        <p>${m.price}</p>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = withAuth(
  async (auth: Auth | null, context: NextPageContext) => {
    const { id } = context.query
    const data = await fetch(
      `${url}/restaurants/${id}?detailed=true`,
      requestOptions
    ).then(res => res.json())

    return {
      props: {
        restaurant: data,
        auth
      }
    }
  },
  false
)

export default Restaurant
