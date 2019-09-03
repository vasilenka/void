import styles from './TimerSection.module.scss'
import React, { useState, useMemo } from 'react'
import cx from 'classnames'
import dayjs from 'dayjs'

import Text from '../Text/Text'
import Section from '../../layouts/Section/Section'
import Container from '../../layouts/Container/Container'
import Button from '../Button/Button'
import Box from '../../layouts/Box/Box'

const TimerSection = ({ children, className, ...restProps }) => {
  let [timer, setTimer] = useState()
  let [duration, setDuration] = useState(0)
  let [start, setStart] = useState()

  let [running, setRunning] = useState(false)

  let [hours, setHours] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)

  const stopTimer = () => {
    clearInterval(timer)
    setRunning(false)
  }

  React.useEffect(() => {
    if (running) {
      let startingTime = Date.now()
      let t = setInterval(handleTick, 100, startingTime)
      setStart(startingTime)
      setTimer(t)
    }
  }, [running])

  function handleTick(initialTime) {
    setDuration(Math.floor((Date.now() - initialTime) / 100))
  }

  function formatValue(val) {
    return val < 10 ? '0' + val : val
  }

  React.useLayoutEffect(() => {
    let timerHour = Math.floor(duration / 36000)
    if (hours !== timerHour) {
      setHours(timerHour)
    }
    let timerMinutes = Math.floor((duration % 36000) / 600)
    if (minutes !== timerMinutes) {
      setMinutes(timerMinutes)
    }
    setSeconds(Math.floor(((duration % 36000) % 600) / 10))
  }, [duration, hours, minutes])

  return (
    <Section className={cx(styles.root)} {...restProps}>
      <Container post>
        <Box justifyBetween alignEnd>
          <main>
            <Text heading5 as="h2">
              Started at:{' '}
              {start ? dayjs(start).format('MMMM DD, YYYY on hh:mm a') : null}
            </Text>
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
              Start
            </Button>
            <Button small secondary onClick={stopTimer} disabled={!running}>
              Stop
            </Button>
          </footer>
        </Box>
      </Container>
    </Section>
  )
}

export default TimerSection
