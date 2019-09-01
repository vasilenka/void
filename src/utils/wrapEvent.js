/**
 *
 * Taken from @reach-ui utils function
 */

const wrapEvent = (incomingHandler, handler) => e => {
  incomingHandler && incomingHandler(e)
  if (!e.defaultPrevented) {
    return handler(e)
  }
}

export { wrapEvent }
