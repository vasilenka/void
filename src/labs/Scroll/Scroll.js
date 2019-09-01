import styles from './Scroll.module.scss'
import React from 'react'
import cx from 'classnames'
import { TweenMax, Expo } from 'gsap/TweenMax'
import { useInView } from 'react-intersection-observer'

import Container from '../../layouts/Container/Container'
import Text from '../../components/Text/Text'

const Scroll = ({ className, ...restProps }) => {
  let mainWrapper = React.createRef()
  let ticking = false

  const [ref, inView, entry] = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  const enterCard = () => {
    TweenMax.staggerFrom('#wrapperCard > li > div', 1.2, { x: 1440, rotation: 0, ease: Expo.easeOut }, 0.08)
  }

  React.useEffect(() => {
    if (inView) {
      enterCard()
    }
  }, [inView])

  React.useEffect(() => {
    mainWrapper.current.addEventListener('scroll', function(e) {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          // console.log(e.target.scrollLeft)
          ticking = false
          // console.log('Inside:', ticking)
        })
        ticking = true
        // console.log('After:', ticking)
      }
    })
  }, [])

  return (
    <div className={cx(styles.root)} {...restProps}>
      <Container className={styles.container}>
        <Text heading1 className={styles.text} as="h1" white>
          Horizontal Scroll Flexbox
        </Text>
      </Container>
      <ul id="wrapperCard" className={styles.area} ref={mainWrapper}>
        <span ref={ref} />
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            1
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            2
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            3
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            4
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            5
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            6
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            7
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            8
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            9
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            10
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            11
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            12
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            13
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            14
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            15
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            16
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            17
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            18
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            19
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.card} onClick={enterCard}>
            20
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Scroll
