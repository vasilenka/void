import styles from './Radio.module.scss'
import React, { useEffect, useState, useContext } from 'react'
import cx from 'classnames'
import Text from '../Text/Text'
import Box from '../../layouts/Box/Box'
import { bool, node, string } from 'prop-types'

const RadioContext = React.createContext()
const RadioGroupContext = React.createContext()

const Radiolabel = ({ id, children, className, isDisabled, classDisabled, ...restProps }) => {
  const context = useContext(RadioContext)

  return (
    <Text
      htmlFor={id || context.id}
      as="label"
      className={cx({
        [styles.label]: true,
        [styles.disabledLabel]: isDisabled || context.isDisabled,
        [className]: className,
        [classDisabled]: isDisabled && classDisabled,
      })}
      heading5
      {...restProps}>
      {children}
    </Text>
  )
}

Radiolabel.displayName = 'Radiolabel'

Radiolabel.defaultProps = {}

Radiolabel.propTypes = {
  /**
   * Supplied from <Radio/> by default
   */
  id: string,
  /**
   * Add your own custom class for disabled state
   */
  classDisabled: string,
  className: string,
  children: node.isRequired,
}

const Radiomark = ({
  className,
  isDisabled,
  isChecked,
  value,
  id,
  name,
  small,
  large,
  onChange,
  onClick,
  ...restProps
}) => {
  const groupContext = useContext(RadioGroupContext)
  const context = useContext(RadioContext)

  return (
    <input
      type="radio"
      id={id || context.id}
      name={name || groupContext.name}
      value={value || context.value}
      disabled={isDisabled || context.isDisabled}
      checked={isChecked || context.isChecked}
      className={cx({
        [styles.normal]: !large && !small,
        [styles.small]: small,
        [styles.large]: large,
        [styles.markDisabled]: isDisabled || context.isDisabled,
        [className]: className,
      })}
      {...restProps}
    />
  )
}

Radiomark.displayName = 'Radiomark'

Radiomark.propTypes = {
  small: bool,
  large: bool,
  isDisabled: bool,
}

const Radio = ({ children, isDisabled, value, name, isChecked, id, className, ...restProps }) => {
  return (
    <RadioContext.Provider value={{ isDisabled, isChecked, value, id }}>
      <Box className={cx({ [className]: className })} {...restProps}>
        {children}
      </Box>
    </RadioContext.Provider>
  )
}

Radio.displayName = 'Radio'

Radio.propTypes = {
  children: node.isRequired,
}

const RadioGroup = ({ className, id, selected, name, children, ...restProps }) => {
  return (
    <RadioGroupContext.Provider value={{ name, id }}>
      <Box className={cx({ [className]: className })} {...restProps}>
        {children}
      </Box>
    </RadioGroupContext.Provider>
  )
}

RadioGroup.displayName = 'RadioGroup'

RadioGroup.propTypes = {
  children: node.isRequired,
}

export { RadioGroup, Radio, Radiomark, Radiolabel }
