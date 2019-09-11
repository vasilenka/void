import { useReducer, useEffect, useState, useRef } from 'react'
import _isEqual from 'lodash.isequal'
// import useEventListener from '@use-it/event-listener'

import { initLocalForage } from './createStore'

const usePersistedStore = (reducers, initialState, key) => {
  const lf = useRef(null)

  const [state, setState] = useState(initialState)
  const [store, dispatch] = useReducer(reducers, state)

  useEffect(() => {
    if (lf.current) {
      let observable = lf.current.newObservable({
        crossTabNotification: true,
        changeDetection: true,
        key: key,
      })

      observable.subscribe({
        next: args => {
          if (args.crossTabNotification) {
            if (!_isEqual(args.newValue, store)) {
              setState(args.newValue)
            } else {
              console.log('SAME OTHER: ', args.newValue)
              console.log('SAME STORE: ', store)
            }
          } else {
            if (!_isEqual(args.newValue, args.oldValue)) {
              dispatch({ type: 'update', store: args.newValue })
            } else {
              console.log('MEH')
            }
          }
        },
        error: err => {
          console.log('ERROR: ', err)
        },
        complete: () => {
          console.log('DESTROYED')
        },
      })
    }
  }, [lf.current])

  const setupLocalForage = async () => {
    let forage = await initLocalForage(key, initialState, dispatch)
    lf.current = forage.lf
    dispatch({ type: 'update', store: forage.storedValue })
  }

  useEffect(() => {
    setupLocalForage()
  }, [])

  useEffect(() => {
    if (!_isEqual(state, store)) {
      window.location.reload()
    }
  }, [state])

  useEffect(() => {
    if (lf.current) {
      lf.current.setItem(key, store)
    }
  }, [store])

  return [store, dispatch]
}

export default usePersistedStore
