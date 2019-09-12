import styles from './NewTodo.module.scss'
import React, { useState, useContext } from 'react'
import cx from 'classnames'
import { AppContext } from '../../layouts/AppProvider/AppProvider'
import Button from '../Button/Button'
import Textfield from '../Textfield/Textfield'
import Box from '../../layouts/Box/Box'

const NewTodo = ({ children, className, ...restProps }) => {
  const { dispatch } = useContext(AppContext)
  let [title, setTitle] = useState('')

  const addNewTodo = () => {
    if (title) {
      dispatch({ type: 'add', text: title })
    }
    setTitle('')
  }

  return (
    <Box alignEnd as="main" className={cx(styles.root)} {...restProps}>
      <Textfield
        type="text"
        id="New task"
        name="New task"
        placeholder="What you gonna do?"
        isRequired={false}
        value={title}
        setValue={e => setTitle(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <Button primary disabled={!title} onClick={addNewTodo}>
        Add
      </Button>
    </Box>
  )
}

export default NewTodo
