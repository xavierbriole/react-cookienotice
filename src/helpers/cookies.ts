export const setCookie = (name: string, value: string, days: number): void => {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()}`
}

export const getCookie = (name: string): string | null => {
  const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`)
  return value ? decodeURIComponent(value[2]) : null
}
