// @flow

export const validateAcceptButtonLabel = (parameter: any): string => {
  if (typeof parameter === 'string') {
    return parameter
  }

  return 'Accept'
}

export const validateReadMoreButtonLabel = (parameter: any): string => {
  if (typeof parameter === 'string') {
    return parameter
  }

  return 'Read more'
}

export const validateReadMoreButtonLink = (parameter: any): string => {
  if (typeof parameter === 'string') {
    if (
      parameter.lastIndexOf('http://', 0) === 0 ||
      parameter.lastIndexOf('https://', 0) === 0
    ) {
      return parameter
    }

    throw new Error(
      '[react-cookienotice] readMoreButtonLink parameter should starts with "http://" or "https://"'
    )
  }

  return 'http://aboutcookies.org/'
}

export const validateOpenInNewTab = (parameter: any): boolean => {
  if (typeof parameter === 'boolean') {
    return parameter
  }

  return true
}

export const validateCookieTextLabel = (parameter: any): string => {
  if (typeof parameter === 'string') {
    return parameter
  }

  return 'This website uses cookies to improve your browsing experience.'
}

export const validateReverseButtons = (parameter: any): boolean => {
  if (typeof parameter === 'boolean') {
    return parameter
  }

  return false
}

export const validateBorderRadius = (parameter: any): number => {
  if (typeof parameter === 'number') {
    return parameter
  }

  return 32
}

export const validateJustifyContent = (
  parameter: any
): 'space-around' | 'space-between' => {
  if (typeof parameter === 'string') {
    if (parameter === 'space-around' || parameter === 'space-between') {
      return parameter
    }

    throw new Error(
      '[react-cookienotice] Accepted values for justifyContent parameter: space-around or space-between'
    )
  }

  return 'space-between'
}

export const validateMaxWidth = (parameter: any): number => {
  if (typeof parameter === 'number') {
    if (parameter < 400) {
      return 400
    }

    return parameter
  }

  return 1000
}
