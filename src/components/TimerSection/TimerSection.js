import styles from './TimerSection.module.scss'
import React, { useState, useMemo, useContext } from 'react'
import cx from 'classnames'
import dayjs from 'dayjs'

import { ReactComponent as PlayIcon } from './../../assets/svg/play.inline.svg'
import { ReactComponent as StopIcon } from './../../assets/svg/stop.inline.svg'

import Text from '../Text/Text'
import Container from '../../layouts/Container/Container'
import Box from '../../layouts/Box/Box'
import { AppContext } from '../../layouts/AppProvider/AppProvider'
import { calculateFromCentiSeconds } from '../../utils/calculateTime'

const Play = ({ play, disabled, ...restProps }) => {
  return (
    <button
      className={cx(styles.play, disabled && styles.disabled)}
      onClick={play}
      disabled={disabled}
      {...restProps}>
      <PlayIcon className={styles.actionIcon} />
    </button>
  )
}

const Stop = ({ stop, disabled, ...restProps }) => {
  return (
    <button
      className={cx(styles.stop, disabled && styles.disabled)}
      onClick={stop}
      disabled={disabled}
      {...restProps}>
      <StopIcon className={styles.actionIcon} />
    </button>
  )
}

const TimerSection = ({ children, className, ...restProps }) => {
  let {
    state,
    running,
    runTimer,
    stopTimer,
    active,
    duration,
    setDuration,
    start,
    timer,
    setStart,
    handleTick,
    setTimer,
  } = useContext(AppContext)

  let [t, setT] = useState(timer)

  React.useEffect(() => {
    console.log('IN: ', t)
  }, [t])

  let [hours, setHours] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)

  function formatValue(val) {
    return val < 10 ? '0' + val : val
  }

  React.useLayoutEffect(() => {
    let {
      hours: timerHour,
      minutes: timerMinutes,
      seconds: timerSeconds,
    } = calculateFromCentiSeconds(duration)

    hours !== timerHour && setHours(timerHour)
    minutes !== timerMinutes && setMinutes(timerMinutes)
    setSeconds(timerSeconds)
  }, [duration, hours, minutes])

  React.useEffect(() => {
    if (active.id && running) {
      let timer = setInterval(handleTick, 100, active.iterations[0].start)
      setT(timer)
      setDuration(Math.floor((Date.now() - active.iterations[0].start) / 100))
      runTimer(active.id, active.iterations[0].start, false)
      setStart(active.iterations[0].start)
    } else {
      clearInterval(t)
      stopTimer(active.id, false)
    }
    return () => {
      clearInterval(t)
      stopTimer(active.id, false)
    }
  }, [running, active])

  return (
    <section className={cx(styles.root)} {...restProps}>
      <Container post>
        <main className={styles.main}>
          <header className={styles.header}>
            <Text
              heading6
              secondary
              as="h2"
              style={{ textTransform: 'uppercase', letterSpacing: 1.44 }}>
              Now Burning
            </Text>
            {active.text ? (
              <Text heading4 as="p" white>
                {active.text}
              </Text>
            ) : (
              <Text heading4 as="p" whiteSecondary>
                Please burn a task from your list!
              </Text>
            )}
          </header>
          <Box justifyBetween alignCenter className={styles.counter}>
            <main className={styles.counts}>
              <Text heading1 style={{ fontVariantNumeric: 'tabular-nums' }}>
                {useMemo(() => formatValue(hours), [hours])}:
              </Text>
              <Text heading1 style={{ fontVariantNumeric: 'tabular-nums' }}>
                {useMemo(() => formatValue(minutes), [minutes])}:
              </Text>
              <Text heading1 style={{ fontVariantNumeric: 'tabular-nums' }}>
                {formatValue(seconds)}
              </Text>
            </main>
            <footer>
              {!running && state.todos.length > 0 && active.id && (
                <Play disabled={running} play={() => runTimer(active.id)} />
              )}
              {running && state.todos.length > 0 && active.id && (
                <Stop disabled={!running} stop={() => stopTimer(active.id)} />
              )}
            </footer>
          </Box>
          {start && (
            <footer className={styles.footer}>
              <Text heading6 whiteSecondary>
                Started at:{' '}
              </Text>
              <Text medium whiteSecondary>
                {dayjs(start).format('MMM D, YYYY [at] h:mm a')}
              </Text>
            </footer>
          )}
        </main>
      </Container>
    </section>
  )
}

export default TimerSection
