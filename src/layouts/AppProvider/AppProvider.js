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

  React.useEffect(() => {
    console.log('ROOT: ', timer)
  }, [timer])

  React.useEffect(() => {
    if (state?.active?.iterations?.length > 0) {
      if (state.active.iterations[0].end) {
        setDuration(
          Math.floor(
            (state.active.iterations[0].end -
              state.active.iterations[0].start) /
              100
          )
        )
      } else {
        setDuration(
          Math.floor((Date.now() - state.active.iterations[0].start) / 100)
        )
      }
      setStart(state.active.iterations[0].start)
    } else {
      setDuration(0)
    }
  }, [state.active])

  const handleTick = initialTime => {
    setDuration(Math.floor((Date.now() - initialTime) / 100))
  }

  const stopTimer = (id, updateStore = true) => {
    if (state.running) {
      if (updateStore) {
        dispatch({ type: 'stop', end: Date.now(), id })
      }
    }
    clearInterval(timer)
  }

  const runTimer = (id, start = Date.now(), updateStore = true) => {
    if (!state.running) {
      let t = setInterval(handleTick, 100, start)
      setStart(start)
      setTimer(t)
      if (updateStore) dispatch({ type: 'start', start, id })
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
        handleTick,
        timer,
        setTimer,
      }}>
      <main className={styles.root}>{children}</main>
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProvider
