import React from 'react'
import Box from '@mui/material/Box'
import Navbar from '../Navbar/Navbar'

interface LayoutProps {
  auth: Auth | null,
  children: React.ReactNode
}

const Layout = ({ auth, children }: LayoutProps) => {

  return (
    <Box component="main" sx={{ height: 'calc(100vh - 64px)' }}>
      <Navbar
        auth={auth}
      />
      <Box
        component="section"
        sx={{
          padding: '1rem',
          marginTop: '64px',
          height: '100%',
          overflowY: 'auto'
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout
