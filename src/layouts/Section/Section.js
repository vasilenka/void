import styles from './Section.module.scss'
import React from 'react'
import cx from 'classnames'
import { string, node } from 'prop-types'
import { motion } from 'framer-motion'

const Section = React.forwardRef(({ children, as, className, ...restProps }, forwardedRef) => {
  let Component = motion[as]

  return (
    <Component
      ref={forwardedRef}
      className={cx({
        [styles.root]: true,
        [className]: className,
      })}
      {...restProps}>
      {children}
    </Component>
  )
})

Section.displayName = 'Section'

Section.defaultProps = {
  as: 'section',
}

Section.propTypes = {
  as: string,
  children: node.isRequired,
}

export default Section
