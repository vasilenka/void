import { useRef, useEffect } from 'react'

/**
 *
 * @param {html node} element, reference using 'ref'.
 * @param {string} type, event type i.e. 'scroll', 'click', 'keyup'.
 * @param {fn()} handler, a handler function, it will receive event object as it's params.
 * @param {event options} options, as in event listener.
 */

const useEventListener = (element, type, handler, options) => {
  const handlerRef = useRef(handler)

  useEffect(() => {
    if (handler) {
      handlerRef.current = handler
    }
  }, [])

  useEffect(() => {
    const listener = event => handlerRef.current(event)
    element.current
      ? element.current.addEventListener(type, listener, options)
      : window.addEventListener(type, listener, options)
    return () => {
      element.current
        ? element.current.removeEventListener(type, listener, options)
        : window.removeEventListener(type, listener, options)
    }
  }, [type, options])
}

export { useEventListener }
