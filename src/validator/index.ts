export const validateAcceptButtonLabel = (
  parameter?: any,
): string | undefined => {
  if (typeof parameter === 'string') {
    return parameter
  }

  return undefined
}

export const validateReadMoreButtonLabel = (
  parameter?: any,
): string | undefined => {
  if (typeof parameter === 'string') {
    return parameter
  }

  return undefined
}

export const validateReadMoreButtonLink = (parameter?: any): string => {
  if (typeof parameter === 'string') {
    if (
      parameter.lastIndexOf('http://', 0) === 0 ||
      parameter.lastIndexOf('https://', 0) === 0
    ) {
      return parameter
    }

    throw new Error(
      '[react-cookienotice] readMoreButtonLink parameter should starts with "http://" or "https://"',
    )
  }

  return 'http://aboutcookies.org/'
}

export const validateReadMoreButtonOpenInNewTab = (
  parameter?: any,
): boolean => {
  if (typeof parameter === 'boolean') {
    return parameter
  }

  return true
}

export const validateCookieTextLabel = (
  parameter?: any,
): string | undefined => {
  if (typeof parameter === 'string') {
    return parameter
  }

  return undefined
}

export const validateCookieExpiration = (parameter?: any): number => {
  if (typeof parameter === 'number') {
    if (parameter > 0) {
      return parameter
    }

    throw new Error(
      '[react-cookienotice] cookieExpiration parameter should be more than 0 day',
    )
  }

  return 30
}

export const validateCookieName = (parameter?: any): string => {
  if (typeof parameter === 'string') {
    if (/\s/.test(parameter)) {
      throw new Error(
        '[react-cookienotice] cookieName parameter should not contain whitespace',
      )
    }

    if (parameter === '') {
      throw new Error(
        '[react-cookienotice] cookieName parameter should have at least one character',
      )
    }

    return parameter
  }

  return 'allow-cookies'
}
