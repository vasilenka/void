import { useReducer, useState, useEffect, useRef } from 'react'
import useEventListener from '@use-it/event-listener'

import createGlobalState from './createGlobalState'

const usePersistedStore = (reducers, initialState, key, { get, set }) => {
  const globalState = useRef(null)

  // const [state, setState] = useState(() => get(key, initialState))
  const [store, dispatch] = useReducer(reducers, get(key, initialState))

  // subscribe to `storage` change events
  useEventListener('storage', ({ key: k, newValue }) => {
    if (k === key) {
      const newState = JSON.parse(newValue)
      if (store !== newState) {
        console.log('🚀EMITTED ...')
        // setState(newState)
        dispatch({
          type: 'update',
          todos: newState.todos,
          counter: newState.counter,
        })
      }
    }
  })

  // only called on mount
  useEffect(() => {
    // register a listener that calls `setState` when another instance emits
    globalState.current = createGlobalState(key, dispatch, initialState)

    return () => {
      globalState.current.deregister()
    }
  }, [])

  useEffect(() => {
    console.log('⏰STORE...')

    set(key, store)

    globalState.current.emit({
      type: 'update',
      todos: store.todos,
      counter: store.counter,
    })
    // setState(store)
  }, [store])

  // // Only persist to storage if state changes.
  // useEffect(() => {
  //   console.log(' 🗺️STATE...')

  //   // persist to localStorage
  //   set(key, state)

  //   // inform all of the other instances in this tab
  //   globalState.current.emit({
  //     type: 'update',
  //     todos: state.todos,
  //     counter: state.counter,
  //   })
  // }, [state])

  return [store, dispatch]
}

export default usePersistedStore
