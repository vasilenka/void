import styles from './Todo.module.scss'
import React, { useEffect, useContext, useState, useRef } from 'react'
import cx from 'classnames'

import { AppContext } from '../../layouts/AppProvider/AppProvider'

import { ReactComponent as DeleteIcon } from './../../assets/svg/delete.inline.svg'
import { ReactComponent as CheckIcon } from './../../assets/svg/checklist.inline.svg'
import { ReactComponent as PlayIcon } from './../../assets/svg/play.inline.svg'

import Card from '../Card/Card'
import Text from '../Text/Text'
import FieldInput from '../FieldInput/FieldInput'
import Box from '../../layouts/Box/Box'
import { calculateFromMiliSeconds } from '../../utils/calculateTime'

const Iteration = ({ iterationsCounter }) => {
  return <Text className={styles.iterationsCount}>{iterationsCounter}</Text>
}

const EditMode = ({ id, setEdit, dispatch, text, setValue, ...props }) => {
  let [editedText, setEditedText] = useState(text)
  const ref = useRef()
  const submitTodo = () => {
    if (editedText) {
      dispatch({ type: 'edit', id, text: editedText })
      setEdit(false)
    }
  }
  const deleteTodo = () => {
    dispatch({ type: 'delete', id })
  }

  useEffect(() => {
    ref.current.focus()
  }, [ref])

  return (
    <>
      <button
        className={cx(styles.iconWrapper, styles.delete)}
        style={{ marginRight: 8 }}
        onClick={deleteTodo}>
        <DeleteIcon className={styles.icon} />
      </button>
      <FieldInput
        ref={ref}
        value={editedText}
        name="edited-text"
        required={false}
        id="edited-text"
        inline
        setValue={e => setEditedText(e.target.value)}
        style={{ width: '100%', marginRight: 8 }}
      />
      <button
        className={cx(styles.iconWrapper, styles.done)}
        onClick={submitTodo}>
        <CheckIcon className={styles.icon} />
      </button>
    </>
  )
}

const Running = props => {
  return (
    <button className={styles.playWrapper} onClick={props.play}>
      <PlayIcon className={styles.playIcon} />
    </button>
  )
}

const Todo = ({ todo, project, className, ...restProps }) => {
  const { dispatch, running, setRunning } = useContext(AppContext)
  let [hover, setHover] = useState(false)
  let [edit, setEdit] = useState(false)
  let [time, setTime] = useState({})

  useEffect(() => {
    let { hours, minutes, seconds } = calculateFromMiliSeconds(
      todo.totalDuration
    )
    setTime({
      hours,
      minutes,
      seconds,
    })
  }, [todo])

  const runTodo = id => {
    if (!running) {
      dispatch({ type: 'active', id })
      setRunning(true)
    }
  }

  return (
    <Card
      inset="medium"
      className={cx(styles.root, className)}
      alignCenter
      justifyBetween
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ paddingLeft: 16, paddingRight: 56 }}
      {...restProps}>
      <Box as="header" alignCenter style={{ flex: 1 }}>
        {edit ? (
          <EditMode
            dispatch={dispatch}
            id={todo.id}
            text={todo.text}
            setEdit={setEdit}
          />
        ) : (
          <>
            {todo.iterationsCounter > 0 && (
              <Iteration iterationsCounter={todo.iterationsCounter} />
            )}
            <Text heading4 as="h2" onClick={() => setEdit(true)}>
              {todo.text}
            </Text>
          </>
        )}
      </Box>
      {!edit && (
        <Box as="footer" justifyEnd alignCenter className={styles.footer}>
          <div
            className={cx(styles.iconWrapper, styles.delete)}
            onClick={() => dispatch({ type: 'delete', id: todo.id })}
            style={{ opacity: hover ? 1 : 0, marginRight: 16 }}>
            <DeleteIcon className={styles.icon} />
          </div>
        </Box>
      )}
      <Box className={styles.duration}>
        <Text heading5 style={{ marginRight: 4 }}>
          {time.hours}h
        </Text>
        <Text heading5 style={{ marginRight: 4 }}>
          {time.minutes}min
        </Text>
      </Box>
      {!running && <Running play={() => runTodo(todo.id)} />}
    </Card>
  )
}

export default Todo
