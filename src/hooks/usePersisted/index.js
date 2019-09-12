import { useState, useReducer } from 'react'

import usePersistedState from './usePersistedState'
import usePersistedStore from './usePersistedStore'
import createStorage from './createStorage'

export const createPersistedState = (key, provider = global.localStorage) => {
  if (provider) {
    const storage = createStorage(provider)
    return initialState => usePersistedState(initialState, key, storage)
  }
  return useState
}

export const createPersistedStore = key => {
  if (key) {
    return (reducers, initialState) =>
      usePersistedStore(reducers, initialState, key)
  }
  return useReducer
}
