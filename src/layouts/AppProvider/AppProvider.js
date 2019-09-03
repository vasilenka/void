import styles from './AppProvider.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

import './AppProvider.module.scss'
import '../../assets/fonts/fonts'

const AppProvider = ({ children }) => (
  <main className={styles.root}>{children}</main>
)

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProvider
