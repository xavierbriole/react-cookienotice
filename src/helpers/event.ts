interface ReactCookieNoticeEvent {
  type: 'REACT_COOKIENOTICE_EVENT'
  service: string
  enabled: boolean
}

export default class Event {
  static send(event: ReactCookieNoticeEvent): void {
    window.postMessage(event, '*')
  }
}
