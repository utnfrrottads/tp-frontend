import React from 'react'

import { Box, Card, Typography } from '@mui/material'

import withAuth from '../utils/withAuth'
import LoginForm from '../components/login/LoginForm'

const LoginPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundImage: `url('/db8907208b387dedf183982486f262f8.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Card>
        <Box sx={{ textAlign: 'center', mt: '30px' }}>
          <h1>Bienvenido</h1>
          <Typography fontWeight="light">Inicia sesión en tu cuenta</Typography>
        </Box>
        <Box sx={{ padding: '20px', margin: '20px', width: '450px' }}>
          <LoginForm />
        </Box>
      </Card>
    </Box>
  )
}

export const getServerSideProps = withAuth(null, false)

export default LoginPage
