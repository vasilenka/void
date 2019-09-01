import React from 'react'
import { TypeInfo, getPropTypes } from './proptypes'

const joinValues = propTypes =>
  propTypes.map(({ value }, index) => (
    <span>
      {`"${value.slice(1, -1)}"`}
      {propTypes.length - 1 === index ? null : (
        <span style={{ display: 'inline-flex', opacity: 0.2, marginLeft: 10, marginRight: 10 }}> | </span>
      )}
    </span>
  ))

const OneOf = ({ propType }) => {
  const propTypes = getPropTypes(propType)
  return (
    <>
      <span style={{ display: 'block', marginBottom: 4, opacity: 0.8 }}>oneOf: </span>
      {Array.isArray(propTypes) ? joinValues(propTypes) : propTypes}
    </>
  )
}

OneOf.propTypes = {
  propType: TypeInfo.isRequired,
}

export default OneOf
