import styles from './Regular.module.scss'
import React from 'react'
import cx from 'classnames'

const Regular = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  )
}

export default Regular
