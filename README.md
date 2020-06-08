# react-cookienotice

> An awesome cookie banner for your website

[![Preview](https://i.imgur.com/YtxC2ef.png)](https://xavierbriole.github.io/react-cookienotice)

[![NPM](https://img.shields.io/npm/v/react-cookienotice.svg)](https://www.npmjs.com/package/react-cookienotice) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add --dev react-cookienotice
```

## Usage

```jsx
import React from 'react'
import CookieNotice from 'react-cookienotice'

class Example extends React.Component {
  render() {
    return <CookieNotice />
  }
}
```

## Parameters

| Key                 | Type      | Description                                           | Default value                                                  |
| ------------------- | --------- | ----------------------------------------------------- | -------------------------------------------------------------- |
| acceptButtonLabel   | `string`  | Edit the "Accept" button label                        | Accept                                                         |
| readMoreButtonLabel | `string`  | Edit the "Read more" button label                     | Read more                                                      |
| readMoreButtonLink  | `string`  | Edit the "Read more" button link                      | <http://aboutcookies.org/>                                     |
| openInNewTab        | `boolean` | Open the "Read more" button link in a new tab         | true                                                           |
| cookieTextLabel     | `string`  | Main cookie notice label                              | This website uses cookies to improve your browsing experience. |
| reverseButtons      | `boolean` | Reverse buttons direction                             | false                                                          |
| borderRadius        | `number`  | Cookie notice border radius (in px)                   | 32                                                             |
| marginSide          | `number`  | Margin between cookie notice and browser side (in px) | 80                                                             |

## License

MIT © [xavierbriole](https://github.com/xavierbriole)
