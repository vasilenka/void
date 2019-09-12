import styles from './TodoList.module.scss'
import React from 'react'
import cx from 'classnames'
import Todo from '../Todo/Todo'
import Container from '../../layouts/Container/Container'
import Section from '../../layouts/Section/Section'
import { AppContext } from '../../layouts/AppProvider/AppProvider'
import NewTodo from '../NewTodo/NewTodo'

const TodoList = ({ children, className, ...restProps }) => {
  const { state } = React.useContext(AppContext)
  return (
    <Section className={cx(styles.root)} {...restProps}>
      <Container post>
        <NewTodo style={{ marginBottom: 24 }} />
        {state && state.todos.map(todo => <Todo key={todo.id} todo={todo} />)}
      </Container>
    </Section>
  )
}

export default TodoList
