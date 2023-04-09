export const err = (message: string): void => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error(`[react-cookienotice] ${message}`)
  }
}
