import localforage from 'localforage'
import { extendPrototype } from 'localforage-observable'
import Observable from 'zen-observable'

const appConfig = {
  name: 'TimeVoid',
  storeName: '___timeVoid',
  driver: localforage.INDEXEDDB,
  description:
    'IndexDB for Time Void, because I am too lazy to setup a proper database.',
}

export const initLocalForage = async (key, initial, cb) => {
  window.Observable = Observable

  let lf = extendPrototype(localforage)
  let storedValue

  lf.config({
    ...appConfig,
  })

  await lf.ready(async () => {
    lf.configObservables({
      crossTabNotification: true,
      crossTabChangeDetection: true,
    })
  })

  let valueFromForage = await lf.getItem(key)
  if (valueFromForage && !Object.entries(valueFromForage).length !== 0) {
    storedValue = valueFromForage
    console.log('STORED:', storedValue)
  } else {
    storedValue = initial
    console.log('INIT:', storedValue)
  }
  return { lf, storedValue }
}
