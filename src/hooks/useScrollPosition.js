import { useState, useMemo } from 'react'
import { useEventListener } from './useEventListener'

let supportsPassive = false
try {
  const opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true
      return true
    },
  })

  window.addEventListener('testPassive', () => {}, opts)
  window.removeEventListener('testPassive', () => {}, opts)
} catch (err) {
  /* Noop! */
}

const defaultThrottler = fn => () => window.requestAnimationFrame(fn)

const passThrough = fn => () => fn() // eslint-disable-line

const getPosition = () => ({
  x: typeof window !== 'undefined' ? window.pageXOffset : 0,
  y: typeof window !== 'undefined' ? window.pageYOffset : 0,
})

/**
 * Keep track of window scroll position while the user scrolls.
 * Optionally you can pass in a throttle wrapper to throttle the update calls (
 * e.g. using [lodash.throttle](https://www.npmjs.com/package/lodash.throttle)
 * or window.requestAnimationFrame).
 *
 * @param {ThrottleWrapper} [throttleWrapper=passThrough] Optional wrapper function useful to throttle calls
 * @returns {{ x: number; y: number }}
 *
 * @example
 *   const throttler = fn => _.throttle(fn, 100);
 *   const Message = () => {
 *     const pos = useScrollPosition(throttler);
 *     const message = pos > 1000 ? 'Yeah, you made it down here!' : '...';
 *     return <p>{message}</p>
 *   }
 */
const useScrollPosition = (throttleWrapper = passThrough) => {
  const [position, setPosition] = useState(getPosition())

  const listener = useMemo(
    () => throttleWrapper(() => setPosition(getPosition())),
    [throttleWrapper]
  )

  useEventListener(
    'scroll',
    listener,
    supportsPassive ? { passive: true } : false
  )

  return position
}

export { useScrollPosition, defaultThrottler }
