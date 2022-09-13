import React from 'react';
import Navbar from '../Navbar/Navbar';
import Box from '@mui/material/Box';

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    const LOGGED_IN: boolean = true;    //Variable solo para testing, eliminar al terminar de usarla

    return (

        <Box component="main" sx={{ height: "calc(100vh - 64px)" }}>
            <Navbar auth={LOGGED_IN ? { user_id: "1", user_name: "Nombre y Apellido", user_email: "asdas@gmail.com", user_profile_photo: "s" } : null} />
            <Box component="section" sx={{
                padding: "1rem",
                marginTop: "64px",
                height: "100%",
                overflowY: "auto"
            }}>
                {children}
            </Box>
        </Box >

    )
};

export default Layout;