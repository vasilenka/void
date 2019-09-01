import React from 'react'
import PropTypes from 'prop-types'

import omit from 'lodash/omit'
import has from 'lodash/has'
import some from 'lodash/some'
import includes from 'lodash/includes'
import forEach from 'lodash/forEach'

export const modifiers = [
  // false,
  'link',
  'positive',
  'critical',
  'secondary',
  'highlight',
  'info',
  'white',
  'whiteSecondary',
]

const getBooleanModifierPropTypes = () => {
  const booleanProps = {}

  forEach(modifiers, modifier => {
    booleanProps[modifier] = PropTypes.bool
  })

  return booleanProps
}

export const ModifierPropTypes = {
  modifier: (props, propName, componentName) => {
    // eslint-disable-line consistent-return
    if (props.modifier && !includes(modifiers, props.modifier)) {
      return new Error(`Invalid prop modifier='${props.modifier}' supplied to ${componentName}`)
    }

    if (props.modifier && some(modifiers, modifier => has(props, modifier))) {
      return new Error(
        `Seems that you've accidentially supplied boolean size along with modifier='${props.modifier}' to ${componentName}, please remove one of them. Otherwise boolean prop will overwrite the 'modifier' prop.`
      )
    }
  },
  ...getBooleanModifierPropTypes(),
}

const parseBooleanModifier = props => {
  const modifierProps = {}

  forEach(modifiers, modifier => {
    if (props[modifier]) {
      modifierProps.modifier = modifier
    }
  })

  return modifierProps
}

const withTextModifierProps = OriginalComponent => {
  const DecoratedComponent = React.forwardRef((props, forwardedRef) => {
    const modifierProp = parseBooleanModifier(props)

    const newProps = {
      ...omit(props, modifiers),
      ...modifierProp,
    }

    return <OriginalComponent ref={forwardedRef} {...newProps} />
  })

  DecoratedComponent.propTypes = ModifierPropTypes
  DecoratedComponent.displayName = OriginalComponent.displayName

  return DecoratedComponent
}

export default withTextModifierProps
