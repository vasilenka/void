import styles from './Todo.module.scss'
import React from 'react'
import cx from 'classnames'

import Card from '../Card/Card'
import Text from '../Text/Text'

const Todo = ({ children, title, project, className, ...restProps }) => {
  return (
    <Card inset="small" column className={cx(styles.root, className)}>
      <Text heading4 as="h2">
        {title}
      </Text>
      <Text small as="p">
        {project.name}
        {project.client && (
          <span style={{ marginLeft: 8, color: project.color }}>
            {project.client}
          </span>
        )}
      </Text>
    </Card>
  )
}

export default Todo
