export const warn = (message: string): void => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`[react-cookienotice] ${message}`)
  }
}

export const err = (message: string): void => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[react-cookienotice] ${message}`)
  }
}
