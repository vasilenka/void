import styles from './Card.module.scss'
import React from 'react'
import cx from 'classnames'

import Box from '../../layouts/Box/Box'

const Card = React.forwardRef(
  ({ children, inset, className, ...restProps }, forwardedRef) => {
    return (
      <Box
        ref={forwardedRef}
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
)

export default Card
