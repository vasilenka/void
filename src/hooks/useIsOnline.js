import { useState, useEffect } from 'react'
import { useEventListener } from './useEventListener'

const getInitialStatus = () => {
  return typeof navigator !== 'undefined' &&
    typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true
}

/**
 * Determine if the client is online or offline and update the value if the
 * state changes.
 *
 * @returns {boolean} True if connected to internet, false otherwise
 *
 * @example
 *   const Status = () => {
 *     const useIsOnline = useIsOnline();
 *     const color = useIsOnline ? 'green' : 'red';
 *     const label = useIsOnline ? 'Connected' : 'Disconnected';
 *     return <p style={{ color }}>{label}</p>;
 *   }
 */
const useIsOnline = () => {
  const [online, setOnline] = useState(getInitialStatus())

  useEffect(() => {
    window.addEventListener('online', () => setOnline(true))
    window.addEventListener('offline', () => setOnline(false))
    return function() {
      window.removeEventListener('online', () => setOnline(true))
      window.removeEventListener('offline', () => setOnline(false))
    }
  }, [])

  return online
}

export { useIsOnline }
