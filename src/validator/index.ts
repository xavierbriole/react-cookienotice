import { err } from '../helpers/debug'

export const validateLabel = (parameter?: any): string | undefined => {
  if (typeof parameter === 'string') {
    return parameter
  }

  return undefined
}

export const validateLink = (parameter?: any): string | undefined => {
  if (typeof parameter === 'string') {
    if (
      parameter.lastIndexOf('http://', 0) === 0 ||
      parameter.lastIndexOf('https://', 0) === 0
    ) {
      return parameter
    }

    err(`a link should start with "http://" or "https://"`)
  }

  return undefined
}

export const validateBoolean = (parameter?: any): boolean | undefined => {
  if (typeof parameter === 'boolean') {
    return parameter
  }

  return undefined
}

export const validateCookieExpiration = (parameter?: any): number => {
  if (typeof parameter === 'number') {
    if (parameter > 0) {
      return parameter
    }

    err(`cookieExpiration parameter should be more than 0 day`)
  }

  return 30
}

export const validateCookieName = (parameter?: any): string => {
  if (typeof parameter === 'string') {
    if (/\s/.test(parameter)) {
      err(`cookieName parameter should not contain whitespace`)
    }

    if (parameter === '') {
      err(`cookieName parameter should have at least one character`)
    }

    return parameter
  }

  return 'hide-notice'
}
