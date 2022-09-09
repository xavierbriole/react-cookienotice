export const err = (message: string): void => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[react-cookienotice] ${message}`)
  }
}
