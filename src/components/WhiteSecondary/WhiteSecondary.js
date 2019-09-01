import styles from './WhiteSecondary.module.scss'
import React from 'react'
import cx from 'classnames'

const WhiteSecondary = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  )
}

export default WhiteSecondary
