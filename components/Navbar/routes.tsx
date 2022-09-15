import React from 'react'
import { CgLogIn, CgLogOff } from 'react-icons/cg'
import { MdDeliveryDining } from 'react-icons/md'
import { IoSettings } from 'react-icons/io5'
import { HiHome } from 'react-icons/hi'
import { BiSupport } from 'react-icons/bi'

class RouteItem {
  text = ''

  icon: React.ReactNode | null = null

  redirectTo: string | null = null

  authRequired = false

  noRenderWhetherAuth?: boolean = false

  constructor(
    text: string,
    icon: React.ReactNode | null,
    redirectTo: string | null,
    authRequired: boolean,
    noRenderWhetherAuth?: boolean
  ) {
    this.text = text
    this.icon = icon
    this.redirectTo = redirectTo
    this.authRequired = authRequired

    if (noRenderWhetherAuth) this.noRenderWhetherAuth = noRenderWhetherAuth
  }
}

const ROUTES = {
  top: [
    new RouteItem('Inicio', <HiHome size={18} />, '/', false),
    new RouteItem(
      'Mis Pedidos',
      <MdDeliveryDining size={18} />,
      '/orders',
      true
    ),
    new RouteItem('Ayuda en Línea', <BiSupport size={18} />, '/', false)
  ],
  bottom: [
    new RouteItem('Configuración', <IoSettings size={18} />, '/', true),
    new RouteItem(
      'Ingresar/Registrarse',
      <CgLogIn size={18} />,
      '/login',
      false,
      true
    ),
    new RouteItem('Cerrar Sesión', <CgLogOff size={18} />, '/logout', true)
  ]
}

export default ROUTES
