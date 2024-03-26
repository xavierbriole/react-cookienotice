export const setCookie = (options: CookieOptions): void => {
  const { name, value, expires, secure, httpOnly, sameSite } = options

  const date = new Date()
  date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000)

  let cookie = `${name}=${value};expires=${date.toUTCString()};path=/;`

  if (secure) cookie += 'Secure;'
  if (httpOnly) cookie += 'HttpOnly;'

  cookie += `SameSite=${sameSite};`

  document.cookie = cookie
}

export const getCookieValue = (name: string): string | null => {
  const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`)

  return value ? decodeURIComponent(value[2]) : null
}
