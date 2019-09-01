import styles from './Positive.module.scss'
import React from 'react'
import cx from 'classnames'

const Positive = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  )
}

export default Positive
