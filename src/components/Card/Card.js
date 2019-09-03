import styles from './Card.module.scss'
import React from 'react'
import cx from 'classnames'

import Box from '../../layouts/Box/Box'

const Card = ({ children, inset, className, ...restProps }) => {
  return (
    <Box
      className={cx({
        [styles.root]: true,
        [styles.container]: true,
        [styles.light]: true,
        [styles[inset]]: inset,
        [className]: className,
      })}
      {...restProps}>
      {children}
    </Box>
  )
}

export default Card
