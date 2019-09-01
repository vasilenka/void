import React from 'react'
import { Link as GatsbyNavLink } from 'gatsby'

const NavLink = ({ children, to, ...restProps }) => {
  return (
    <GatsbyNavLink to={to} {...restProps}>
      {children}
    </GatsbyNavLink>
  )
}

export default NavLink
