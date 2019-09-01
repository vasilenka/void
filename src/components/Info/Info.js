import styles from './Info.module.scss'
import React from 'react'
import cx from 'classnames'

const Info = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  )
}

export default Info
