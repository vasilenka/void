import styles from './Default.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

import './Default.module.scss'
import '../../assets/fonts/fonts'

const Layout = ({ children }) => <main className={styles.root}>{children}</main>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
