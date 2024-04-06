import { err } from '../helpers/debug'

export const validateString = (parameter?: any): string | undefined => {
  if (typeof parameter === 'string') {
    return parameter
  }

  return undefined
}

export const validateTimeout = (parameter?: any): number => {
  if (typeof parameter === 'number') {
    if (parameter >= 0) {
      return parameter
    }

    err(`timeout should be a positive number`)
  }

  return 1000
}

export const validateServices = (
  parameter?: any,
): ServiceObject[] | undefined => {
  if (Array.isArray(parameter)) {
    if (parameter.length === 0) {
      err(`services should have at least one element`)
    }

    if (parameter.every((element) => typeof element === 'object')) {
      return parameter
    }

    err(`services should contain only objects`)
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

export const validatePlacement = (
  parameter?: any,
): { vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' } => {
  if (typeof parameter === 'object') {
    if (parameter.vertical !== 'top' || parameter.vertical !== 'bottom') {
      err(`placement.vertical parameter should be "top" or "bottom"`)
    }

    if (parameter.horizontal !== 'left' || parameter.horizontal !== 'right') {
      err(`placement.horizontal parameter should be "left" or "right"`)
    }

    return parameter
  }

  return { vertical: 'bottom', horizontal: 'left' }
}

export const validateCookieOptions = (parameter?: any): CookieOptions => {
  if (typeof parameter === 'object') {
    if (typeof parameter.name !== 'string') {
      err(`cookieOptions.name parameter should be a string`)
    }

    if (typeof parameter.value !== 'string') {
      err(`cookieOptions.value parameter should be a string`)
    }

    if (typeof parameter.expires !== 'number') {
      err(`cookieOptions.expires parameter should be a number`)
    }

    if (typeof parameter.secure !== 'boolean') {
      err(`cookieOptions.secure parameter should be a boolean`)
    }

    if (typeof parameter.httpOnly !== 'boolean') {
      err(`cookieOptions.httpOnly parameter should be a boolean`)
    }

    if (
      /* v8 ignore next 3 */
      parameter.sameSite !== 'strict' ||
      parameter.sameSite !== 'lax' ||
      parameter.sameSite !== 'none'
    ) {
      err(
        `cookieOptions.sameSite parameter should be "strict", "lax" or "none"`,
      )
    }

    if (/\s/.test(parameter.name)) {
      err(`cookieOptions.name parameter should not contain whitespace`)
    }

    if (parameter.name === '') {
      err(`cookieOptions.name parameter should have at least one character`)
    }

    if (/\s/.test(parameter.value)) {
      err(`cookieOptions.value parameter should not contain whitespace`)
    }

    if (parameter.value === '') {
      err(`cookieOptions.value parameter should have at least one character`)
    }

    if (parameter.expires <= 0) {
      err(`cookieOptions.expires parameter should be more than 0 day`)
    }

    return parameter
  }

  return {
    name: 'hide-notice',
    value: 'true',
    expires: 30,
    secure: false,
    httpOnly: false,
    sameSite: 'lax',
  }
}
