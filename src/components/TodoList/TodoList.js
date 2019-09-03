import styles from './TodoList.module.scss'
import React from 'react'
import cx from 'classnames'
import Todo from '../Todo/Todo'
import Container from '../../layouts/Container/Container'
import Section from '../../layouts/Section/Section'

const TodoList = ({ children, className, ...restProps }) => {
  const project = {
    name: 'Makadia Company Website',
    client: 'Makadia Group',
    color: 'teal',
  }
  return (
    <Section className={cx(styles.root)} {...restProps}>
      <Container post>
        <Todo title="Add <Footer/> section" project={project} />
        <Todo title="Add <Footer/> section" project={project} />
        <Todo title="Add <Footer/> section" project={project} />
        <Todo title="Add <Footer/> section" project={project} />
        <Todo title="Add <Footer/> section" project={project} />
      </Container>
    </Section>
  )
}

export default TodoList
