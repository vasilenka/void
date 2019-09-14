import styles from './TodoList.module.scss'
import React, { useRef } from 'react'
import cx from 'classnames'
import Todo from '../Todo/Todo'
import Container from '../../layouts/Container/Container'
import Section from '../../layouts/Section/Section'
import { AppContext } from '../../layouts/AppProvider/AppProvider'
import NewTodo from '../NewTodo/NewTodo'

import move from 'array-move'
import { findIndex } from '../../utils/find-index'

const TodoList = ({ children, className, ...restProps }) => {
  const { state, dispatch } = React.useContext(AppContext)
  const positions = useRef([]).current
  const setPosition = (i, offset) => (positions[i] = offset)
  // Find the ideal index for a dragging item based on its position in the array, and its
  // current drag offset. If it's different to its current index, we swap this item with that
  // sibling.
  const moveItem = (i, dragOffset) => {
    const targetIndex = findIndex(i, dragOffset, positions)
    if (targetIndex !== i)
      dispatch({
        type: 'update',
        store: { ...state, todos: move(state.todos, i, targetIndex) },
      })
  }

  return (
    <Section className={cx(styles.root)} {...restProps}>
      <Container post>
        <NewTodo style={{ marginBottom: 24 }} />
        {state &&
          state.todos.map((todo, i) => (
            <Todo
              key={todo.id}
              i={i}
              todo={todo}
              setPosition={setPosition}
              moveItem={moveItem}
            />
          ))}
      </Container>
    </Section>
  )
}

export default TodoList
