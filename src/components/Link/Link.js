import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ children, external, to, ...restPprops }) =>
  external ? (
    <a href={to} {...restPprops}>
      {children}
    </a>
  ) : (
    <RouterLink to={to} {...restPprops}>
      {children}
    </RouterLink>
  );

export default Link;
