const globalStore = {}

const createGlobalStore = (key, thisCallback, initialValue) => {
  if (!globalStore[key]) {
    globalStore[key] = { callbacks: [], value: initialValue }
  }
  globalStore[key].callbacks.push(thisCallback)
  return {
    deregister() {
      const arr = globalStore[key].callbacks
      const index = arr.indexOf(thisCallback)
      if (index > -1) {
        arr.splice(index, 1)
      }
    },
    emit(value) {
      if (globalStore[key].value !== value) {
        globalStore[key].value = value
        globalStore[key].callbacks.forEach(callback => {
          if (thisCallback !== callback) {
            callback(value)
          }
        })
      }
    },
  }
}

export default createGlobalStore
