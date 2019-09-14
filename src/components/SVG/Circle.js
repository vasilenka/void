import styles from './Circle.module.scss'
import React from 'react'
import { motion } from 'framer-motion'
import Box from '../../layouts/Box/Box'

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      staggerChildren: 0.3,
    },
  },
}

const item = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
}

const Circle = ({ children, className, ...restProps }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 240"
      className={className}
      {...restProps}>
      <motion.circle fill="currentColor" cx="120" cy="120" r="120" />
    </motion.svg>
  )
}

const Circles = props => {
  return (
    <Box variants={container} initial="hidden" animate="visible">
      <Circle className={styles.circle1} variants={item} />
      <Circle className={styles.circle2} variants={item} />
    </Box>
  )
}

export default Circles
