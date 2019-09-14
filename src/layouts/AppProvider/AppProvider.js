import styles from './AppProvider.module.scss'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { createPersistedStore } from './../../hooks'
import { initialTodos, todoReducer } from './reducers'

import './AppProvider.module.scss'
import '../../assets/fonts/fonts'

let useTasks = createPersistedStore('__void::Task')

export const AppContext = React.createContext({
  state: undefined,
  dispatch: undefined,
})

const AppProvider = ({ children }) => {
  let [state, dispatch] = useTasks(todoReducer, initialTodos)

  let [timer, setTimer] = useState()
  let [duration, setDuration] = useState(0)
  let [start, setStart] = useState()

  const handleTick = initialTime => {
    setDuration(Math.floor((Date.now() - initialTime) / 100))
  }

  const stopTimer = id => {
    if (state.running) {
      dispatch({ type: 'stop', end: Date.now(), id })
      clearInterval(timer)
    }
  }

  const runTimer = id => {
    if (!state.running) {
      let start = Date.now()
      let t = setInterval(handleTick, 100, start)
      setStart(start)
      setTimer(t)
      dispatch({ type: 'start', start, id })
    }
  }

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        active: state.active,
        running: state.running,
        stopTimer,
        runTimer,
        duration,
        setDuration,
        start,
        setStart,
      }}>
      <main className={styles.root}>{children}</main>
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProvider
