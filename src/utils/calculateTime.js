export const calculateFromMiliSeconds = ms => {
  let newSeconds = Math.floor(ms / 1000)

  let hours = Math.floor(newSeconds / 3600)
  let minutes = Math.floor((newSeconds % 3600) / 60)
  let seconds = Math.floor((newSeconds % 3600) % 60)
  return { hours, minutes, seconds }
}

export const calculateFromCentiSeconds = ms => {
  let hours = Math.floor(ms / 36000)
  let minutes = Math.floor((ms % 36000) / 600)
  let seconds = Math.floor(((ms % 36000) % 600) / 10)
  return { hours, minutes, seconds }
}
