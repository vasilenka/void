import { useReducer, useEffect, useState, useRef } from 'react'
import _isEqual from 'lodash.isequal'

import { initLocalForage } from './createStore'

const usePersistedStore = (reducers, initialState, key) => {
  const lf = useRef(null)

  const [state, setState] = useState(initialState)
  const [store, dispatch] = useReducer(reducers, initialState)

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
              console.log('OTHER ARGS: ', args.newValue)
              console.log('OTHER STORE: ', store)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setupLocalForage = async () => {
    let forage = await initLocalForage(key, initialState, dispatch)
    lf.current = forage.lf
    dispatch({ type: 'update', store: forage.storedValue })
  }

  useEffect(() => {
    setupLocalForage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!_isEqual(state, store)) {
      window.location.reload()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  useEffect(() => {
    if (lf.current) {
      lf.current.setItem(key, store)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store])

  return [store, dispatch]
}

export default usePersistedStore
