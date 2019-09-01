import React from 'react'
import styles from './TableComponent.module.scss'
import Text from '../../components/Text/Text'
import PrettyPropType from './types/PrettyPropType'

export const TableComponent = ({ propDefinitions }) => {
  const props = propDefinitions.map(({ property, propType, required, description, defaultValue }) => {
    let optimizedDescription = description.split('\n')
    return (
      <tr key={property}>
        <td className={styles.required}>
          {required ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path
                fill="teal"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"
              />
            </svg>
          ) : null}
        </td>
        <td className={styles.prop}>{property}</td>
        <td className={styles.type}>
          {propType.name && (
            <Text className={styles.name}>
              <PrettyPropType propType={propType} />
            </Text>
          )}
          {description
            ? optimizedDescription.map((desc, index) => (
                <Text key={`${index}-description-${property}-${desc}`} className={styles.description}>
                  {desc}
                </Text>
              ))
            : null}
        </td>
        {defaultValue && defaultValue.length > 0 ? (
          <td className="default">
            <span>{defaultValue}</span>
          </td>
        ) : (
          <td className="default">-</td>
        )}
      </tr>
    )
  })

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className="header-isRequired" />
          <th className="header-name">Name</th>
          <th className="header-type">Type</th>
          <th className="header-default">Default</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  )
}
