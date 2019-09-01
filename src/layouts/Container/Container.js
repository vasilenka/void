import styles from './Container.module.scss'
import React from 'react'
import classnames from 'classnames'
import { string, bool, object, node, oneOfType } from 'prop-types'
import { motion } from 'framer-motion'

const Container = React.forwardRef(
  ({ as, children, className, narrow, bleed, post, fixLeft, fixRight, ...restProps }, forwardedRef) => {
    let Component = motion[as]

    return (
      <Component
        ref={forwardedRef}
        className={classnames({
          [styles.normal]: !narrow && !bleed && !post && !fixLeft && !fixRight,
          [styles.narrow]: narrow,
          [styles.bleed]: bleed,
          [styles.post]: post,
          [styles.fixLeft]: fixLeft,
          [styles.fixRight]: fixRight,
          [className]: className,
        })}
        {...restProps}>
        {children}
      </Component>
    )
  }
)

Container.displayName = 'Container'

Container.defaultProps = {
  as: 'div',
  narrow: false,
  bleed: false,
  post: false,
  fixLeft: false,
  fixRight: false,
}

Container.propTypes = {
  className: oneOfType([string, object]),
  /**
   * Rendering the component as specific html tag
   * */
  as: string,
  /**
   * Set the container to $narrow as in mixins/_container.scss
   * */
  narrow: bool,
  /**
   * Set the container to fill the parent container
   * */
  bleed: bool,
  /**
   * Set the container width suitable for reading experience (i.e. blog post body)
   * */
  post: bool,
  /**
   * Add margin-left on container to accomodate space for necessary component (i.e. sidebar)
   * */
  fixLeft: bool,
  /**
   * Add margin-right on container to accomodate space for necessary component (i.e. sidebar)
   * */
  fixRight: bool,
  children: node.isRequired,
}

export default Container
