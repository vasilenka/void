import styles from './AppProvider.module.scss'
import React, { useReducer, useState } from 'react'
import PropTypes from 'prop-types'

import { initialTodos, todoReducer } from './reducers'

import './AppProvider.module.scss'
import '../../assets/fonts/fonts'

export const AppContext = React.createContext({
  state: undefined,
  dispatch: undefined,
})

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos)
  const [active, setActive] = useState('')
  let [running, setRunning] = useState(false)

  return (
    <AppContext.Provider
      value={{ state, dispatch, active, setActive, running, setRunning }}>
      <main className={styles.root}>{children}</main>
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProvider
