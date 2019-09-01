import styles from './Critical.module.scss'
import React from 'react'
import cx from 'classnames'

const Critical = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  )
}

export default Critical
