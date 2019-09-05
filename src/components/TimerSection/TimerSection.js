import styles from './TimerSection.module.scss'
import React, { useState, useMemo, useContext } from 'react'
import cx from 'classnames'
import dayjs from 'dayjs'

import Text from '../Text/Text'
import Section from '../../layouts/Section/Section'
import Container from '../../layouts/Container/Container'
import Button from '../Button/Button'
import Box from '../../layouts/Box/Box'
import { AppContext } from '../../layouts/AppProvider/AppProvider'
import { calculateFromCentiSeconds } from '../../utils/calculateTime'

const TimerSection = ({ children, className, ...restProps }) => {
  let { dispatch, running, setRunning, active } = useContext(AppContext)

  let [timer, setTimer] = useState()
  let [duration, setDuration] = useState(0)
  let [start, setStart] = useState()

  let [hours, setHours] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)

  const stopTimer = () => {
    if (running && active) {
      dispatch({ type: 'stop', end: Date.now(), id: active.id })
      setRunning(false)
      clearInterval(timer)
    }
  }

  React.useEffect(() => {
    if (running && active) {
      let startingTime = Date.now()
      let t = setInterval(handleTick, 100, startingTime)
      setStart(startingTime)
      setTimer(t)
      dispatch({ type: 'start', start: startingTime, id: active.id })
    }
  }, [running, active, dispatch])

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
    <Section
      className={cx(styles.root)}
      style={{ paddingBottom: 0 }}
      {...restProps}>
      <Container post>
        <header className={styles.header}>
          <Text
            heading6
            secondary
            as="h2"
            style={{ textTransform: 'uppercase', letterSpacing: 1.44 }}>
            Now Burning
          </Text>
          {active ? (
            <Text heading4 as="p">
              {active.text}
            </Text>
          ) : (
            <Text heading4 as="p" secondary>
              Please burn a task from your list!
            </Text>
          )}
        </header>
        <Box justifyBetween alignCenter className={styles.counter}>
          <main>
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
            <Button
              small
              primary
              onClick={() => setRunning(true)}
              style={{ marginRight: 8 }}
              disabled={running}>
              Burn
            </Button>
            <Button small secondary onClick={stopTimer} disabled={!running}>
              Stop
            </Button>
          </footer>
        </Box>
        {start && (
          <footer className={styles.footer}>
            <Text heading6>Started at: </Text>
            <Text medium>{dayjs(start).format('MMM D, YYYY [at] h:mm a')}</Text>
          </footer>
        )}
      </Container>
    </Section>
  )
}

export default TimerSection
