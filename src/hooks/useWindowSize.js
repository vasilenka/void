import React, { useState, useLayoutEffect } from 'react'
import { useEventListener } from './useEventListener'

export const useWindowSize = () => {
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()

  const handleResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEventListener({}, 'resize', handleResize)

  useLayoutEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }, [])

  return { width, height }
}
