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
  let { dispatch, running, setRunning, active } = useContext(AppContext)

  let [timer, setTimer] = useState()
  let [duration, setDuration] = useState(0)
  let [start, setStart] = useState()

  let [hours, setHours] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)

  const stopTimer = id => {
    if (running) {
      dispatch({ type: 'stop', end: Date.now(), id })
      setRunning(false)
      clearInterval(timer)
    }
  }

  React.useEffect(() => {
    if (running) {
      let startingTime = Date.now()
      let t = setInterval(handleTick, 100, startingTime)
      setStart(startingTime)
      setTimer(t)
      dispatch({ type: 'start', start: startingTime, id: active.id })
    }
  }, [running, dispatch])

  function handleTick(initialTime) {
    setDuration(Math.floor((Date.now() - initialTime) / 100))
  }

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
              {!running && (
                <Play
                  disabled={running || !active}
                  play={() => setRunning(true)}
                />
              )}
              {running && (
                <Stop
                  disabled={!running || !active}
                  stop={() => stopTimer(active.id)}
                />
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
