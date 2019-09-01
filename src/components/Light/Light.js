import styles from './Light.module.scss'
import React from 'react'
import cx from 'classnames'

const Light = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  )
}

export default Light
