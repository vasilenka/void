import styles from './Column.module.scss'
import React from 'react'
import cx from 'classnames'
// import { jsx } from '@emotion/core'

const Column = ({
  as,
  smallPhone = '100%',
  phone = '100%',
  tablet,
  tabletLandscape,
  desktop,
  desktopWide,
  children,
  className,
  ...restProps
}) => {
  let Component = as || 'div'
  const transformValue = val => (typeof val === 'number' ? `${(val * 100) / 12}%` : val)
  return (
    <Component
      css={{
        '--column-amount-desktopWide': transformValue(desktopWide),
        '--column-amount-desktop': transformValue(desktop),
        '--column-amount-tabletLandscape': transformValue(tabletLandscape),
        '--column-amount-tablet': transformValue(tablet),
        '--column-amount-phone': transformValue(phone),
        '--column-amount-smallPhone': transformValue(smallPhone),
      }}
      className={cx({
        [styles.smallPhone]: true,
        [styles.phone]: phone,
        [styles.tablet]: tablet,
        [styles.tabletLandscape]: tabletLandscape,
        [styles.desktop]: desktop,
        [styles.desktopWide]: desktopWide,
      })}
      {...restProps}>
      {children}
    </Component>
  )
}

export default Column
