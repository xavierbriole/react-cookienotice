export default (...args: Array<any>): string => {
  const classes = []

  for (const arg of args) {
    if (arg) {
      if (typeof arg === 'string') {
        classes.push(arg)
      } else if (Array.isArray(arg)) {
        classes.push(...arg)
      } else {
        for (const key in arg) {
          if (arg[key]) {
            classes.push(key)
          }
        }
      }
    }
  }

  return classes.join(' ')
}
