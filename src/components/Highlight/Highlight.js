import styles from './Highlight.module.scss'
import React from 'react'
import cx from 'classnames'

const Highlight = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={cx(styles.root)}>
      {children}
    </span>
  )
}

export default Highlight
