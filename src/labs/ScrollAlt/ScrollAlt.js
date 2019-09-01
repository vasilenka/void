import styles from './ScrollAlt.module.scss'
import React from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container'
import Text from '../../../src/components/Text/Text'

const ScrollWrapper = props => {
  let wrapper = React.createRef()

  // function hello(content) {
  //   console.log(content)
  // }

  // useEventListener('scroll', wrapper, hello)

  return (
    <>
      <ul className={styles.area} ref={wrapper}>
        <li className={styles.item}>
          <div className={styles.card}>1</div>
        </li>
        <li className={styles.item}>
          <div className={styles.card}>2</div>
        </li>
        <li className={styles.item}>
          <div className={styles.card}>3</div>
        </li>
        <li className={styles.item}>
          <div className={styles.card}>4</div>
        </li>
        <li className={styles.item}>
          <div className={styles.card}>5</div>
        </li>
        <li className={styles.item}>
          <div className={styles.card}>6</div>
        </li>
        <li className={styles.item}>
          <div className={styles.card}>7</div>
        </li>
        <li className={styles.item}>
          <div className={styles.card}>8</div>
        </li>
        <li className={styles.item}>
          <div className={styles.card}>9</div>
        </li>
        <li className={styles.item}>
          <div className={styles.card}>10</div>
        </li>
        <li className={styles.item}>
          <div className={styles.card}>11</div>
        </li>
        <li className={styles.item}>
          <div className={styles.card}>12</div>
        </li>
      </ul>
      {/* <Container> */}
      {/* <Text heading5> */}
      {/* Scroll: x:{position.x}, y:{position.y}{' '} */}
      {/* </Text> */}
      {/* </Container> */}
    </>
  )
}

const ScrollAlt = ({ className, ...restProps }) => {
  return (
    <div className={cx(styles.root)} {...restProps}>
      <Container className={styles.container}>
        <Text as="h1" heading1 className={styles.heading} white>
          Horizontal Sroll Grid
        </Text>
      </Container>
      <div className={cx(styles.wrapper)}>
        <ScrollWrapper />
      </div>
    </div>
  )
}

export default ScrollAlt
