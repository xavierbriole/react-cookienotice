const isDevelopment = process.env.NODE_ENV === 'development'

export const warn = (message: string): void => {
  if (isDevelopment) {
    console.warn(`[react-cookienotice] ${message}`)
  }
}

export const err = (message: string): void => {
  if (isDevelopment) {
    console.error(`[react-cookienotice] ${message}`)
  }
}
