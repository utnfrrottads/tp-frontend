/* eslint-disable react/require-default-props */
import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import { VscTriangleDown } from 'react-icons/vsc'
import Hamburger from 'hamburger-react'
import useMediaQuery from '@mui/material/useMediaQuery'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import { useRouter, NextRouter } from 'next/router'
import Box from '@mui/material/Box'
import { List, Menu } from '@mui/material'
import ROUTES from './routes'

/* -----------------------------------------------IMPORTANTE---------------------------------------------------------------*/

/* PARA EDITAR LAS RUTAS, SUS ÍCONOS Y NOMBRES, EDITAR EL ARCHIVO */
/* routes.tsx QUE SE ENCUENTRA EN ESTE MISMO DIRECTORIO */

/*--------------------------------------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------NAVBAR COMPONENT--------------------------------------------*/

interface NavbarProps {
  auth: Auth | null
}

const Navbar = ({ auth }: NavbarProps) => {
  const isResponsive: boolean = useMediaQuery('(max-width:768px)')
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const router = useRouter()

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      <Box
        component="nav"
        sx={{
          background: '#F76776',
          color: '#ffffff',
          padding: '0.5rem 1rem',
          display: 'flex',
          height: '64px',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
          position: 'fixed',
          top: 0,
          left: 0
        }}
      >
        <h1 style={{ cursor: 'pointer' }} onClick={() => router.push('/')}>
          LOGO
        </h1>

        {isResponsive && (
          <Hamburger
            size={25}
            toggled={menuIsOpen}
            onToggle={() => setMenuIsOpen(!menuIsOpen)}
          />
        )}

        {!isResponsive && (
          <Box
            onClick={handleClick}
            sx={{
              display: 'flex',
              alignItems: 'center',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
          >
            {auth && (
              <Avatar
                sx={{
                  bgcolor: '#FFFFFF',
                  color: '#F76776',
                  width: 32,
                  height: 32,
                  fontSize: '0.8rem'
                }}
                alt="avatar"
              >
                {`${auth.name[0]}${auth.surname[0]}`}
              </Avatar>
            )}
            {auth && (
              <span
                style={{
                  margin: '0 0.5rem',
                  fontSize: '0.9rem'
                }}
              >
                {auth.name} {auth.surname}
              </span>
            )}
            <VscTriangleDown size={15} />
          </Box>
        )}

        {!isResponsive && (
          <Dropdown
            router={router}
            auth={auth}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
          />
        )}
      </Box>

      {isResponsive && (
        <ResponsiveDropdown
          router={router}
          menuIsOpen={menuIsOpen}
          auth={auth}
        />
      )}
    </>
  )
}

/* ------------------------------------------------DROPDOWN COMPONENT FOR NAVBAR---------------------------------------------*/

interface DropdownProps {
  auth: Auth | null
  anchorEl: null | HTMLElement
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  router: NextRouter
}

const Dropdown = ({ auth, anchorEl, setAnchorEl, router }: DropdownProps) => {
  const getDropdownItems = () => {
    return [...ROUTES.top, ...ROUTES.bottom].map(route => {
      if (route.authRequired) {
        return (
          auth && (
            <DropdownItem
              key={route.text}
              redirectTo={route.redirectTo}
              router={router}
              text={route.text}
              icon={route.icon}
              setAnchorEl={setAnchorEl}
            />
          )
        )
      }

      if (auth && route.noRenderWhetherAuth) return null
      return (
        <DropdownItem
          key={route.text}
          redirectTo={route.redirectTo}
          router={router}
          text={route.text}
          icon={route.icon}
          setAnchorEl={setAnchorEl}
        />
      )
    })
  }

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
    >
      {getDropdownItems()}
    </Menu>
  )
}

interface DropdownItemProps {
  text: string
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  icon?: React.ReactNode
  redirectTo: string | null
  router: NextRouter
}

const DropdownItem = ({
  text,
  icon,
  setAnchorEl,
  redirectTo,
  router
}: DropdownItemProps) => {
  const handleItemClick = () => {
    if (redirectTo) router.push(redirectTo)
    setAnchorEl(null)
  }

  return (
    <MenuItem
      sx={{ color: '#F76776', '&:hover': { background: '#F5B4BB' } }}
      onClick={handleItemClick}
    >
      <ListItemIcon>
        {React.cloneElement(icon as React.ReactElement<any>, {
          color: '#F76776'
        })}
      </ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </MenuItem>
  )
}

/* ------------------------------------------------RESPONSIVE DROPDOWN COMPONENT FOR NAVBAR----------------------------------*/

interface ResponsiveDropdownProps {
  menuIsOpen: boolean
  auth: Auth | null
  router: NextRouter
}

const ResponsiveDropdown = ({
  menuIsOpen,
  auth,
  router
}: ResponsiveDropdownProps) => {
  const getResponsiveDropdownItems = (type: 'top' | 'bottom') => {
    return ROUTES[type].map(route => {
      if (route.authRequired) {
        return (
          auth && (
            <ResponsiveDropdownItem
              key={route.text}
              redirectTo={route.redirectTo}
              router={router}
              text={route.text}
              icon={route.icon}
            />
          )
        )
      }

      if (auth && route.noRenderWhetherAuth) return null
      return (
        <ResponsiveDropdownItem
          key={route.text}
          redirectTo={route.redirectTo}
          router={router}
          text={route.text}
          icon={route.icon}
        />
      )
    })
  }

  return (
    <Box
      sx={{
        height: menuIsOpen ? 'calc(100% - 64px)' : '0',
        background: '#F76776',
        position: 'fixed',
        top: '64px',
        zIndex: 999,
        width: '100%',
        overflow: 'hidden',
        transition: 'height .3s ease-in-out',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ width: '100%' }}>
        {auth && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Avatar
              alt="avatar"
              sx={{
                bgcolor: '#FFFFFF',
                color: '#F76776',
                width: 32,
                height: 32,
                fontSize: '0.8rem'
              }}
            >
              {`${auth.name[0]}${auth.surname[0]}`}
            </Avatar>
            <h4
              style={{
                marginTop: '0.3rem',
                color: '#FFFFFF'
              }}
            >
              {auth.name} {auth.surname}
            </h4>
          </Box>
        )}

        <List sx={{ width: '100%' }}>{getResponsiveDropdownItems('top')}</List>
      </Box>

      <Box sx={{ width: '100%' }}>{getResponsiveDropdownItems('bottom')}</Box>
    </Box>
  )
}

interface ResponsiveDropdownItemProps {
  text: string
  icon?: React.ReactNode
  redirectTo: string | null
  router: NextRouter
}

const ResponsiveDropdownItem = ({
  text,
  icon,
  redirectTo,
  router
}: ResponsiveDropdownItemProps) => {
  return (
    <ListItem
      onClick={() => {
        if (redirectTo) router.push(redirectTo)
      }}
      sx={{ color: '#FFFFFF', '&:hover': { background: '#F9A7B0' } }}
      disablePadding
    >
      <ListItemButton>
        <ListItemIcon>
          {React.cloneElement(icon as React.ReactElement<any>, {
            color: '#FFFFFF'
          })}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )
}

export default Navbar
