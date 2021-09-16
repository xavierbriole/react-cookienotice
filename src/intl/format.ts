import messages from './messages'

const DEFAULT_LANGUAGE = 'en'

export const formatMessage = (id: string, override?: string): string => {
  if (override !== undefined) {
    return override
  }

  const navigatorLanguage = navigator.language.split('-')[0]
  const availableLanguages = Object.keys(messages)
  const usedLanguage = availableLanguages.includes(navigatorLanguage)
    ? navigatorLanguage
    : DEFAULT_LANGUAGE

  if (messages[usedLanguage][id] === undefined) {
    console.error(`[intl] no message found for id "${id}"`)
    return id
  }

  return messages[usedLanguage][id]
}
