import styles from './AppProvider.module.scss'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { createPersistedStore } from './../../hooks'
import { initialTodos, todoReducer } from './reducers'
import { ReactComponent as Circle } from './../../assets/svg/circle.inline.svg'

import './AppProvider.module.scss'
import '../../assets/fonts/fonts'

let useTasks = createPersistedStore('__void::Task')

export const AppContext = React.createContext({
  state: undefined,
  dispatch: undefined,
})

const AppProvider = ({ children }) => {
  let [state, dispatch] = useTasks(todoReducer, initialTodos)
  let [running, setRunning] = useState(false)

  return (
    <AppContext.Provider
      value={{ state, dispatch, active: state.active, running, setRunning }}>
      <main className={styles.root}>
        {children}
        <Circle className={styles.circle1} />
        <Circle className={styles.circle2} />
      </main>
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProvider
