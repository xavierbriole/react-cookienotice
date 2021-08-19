import messages from './messages'

export const formatMessage = (id: string, override?: string): string => {
  const language = navigator.language.split('-')[0]

  if (override !== undefined) {
    return override
  }

  if (messages[language][id] === undefined) {
    console.error(`[intl] no message found for id "${id}"`)
    return id
  }

  return messages[language][id]
}
