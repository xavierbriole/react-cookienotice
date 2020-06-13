# react-cookienotice

> An awesome cookie banner for your website

[![Preview](https://i.imgur.com/3weiUBB.png)](https://xavierbriole.github.io/react-cookienotice)

[![NPM](https://img.shields.io/npm/v/react-cookienotice.svg)](https://www.npmjs.com/package/react-cookienotice) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![npm-publish](https://github.com/xavierbriole/react-cookienotice/workflows/npm-publish/badge.svg)

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

All parameters are optionals

| Key                 | Type      | Description                                                              | Default value                                                  |
| ------------------- | --------- | ------------------------------------------------------------------------ | -------------------------------------------------------------- |
| acceptButtonLabel   | `string`  | Edit the "Accept" button label                                           | Accept                                                         |
| readMoreButtonLabel | `string`  | Edit the "Read more" button label                                        | Read more                                                      |
| readMoreButtonLink  | `string`  | Edit the "Read more" button link                                         | <http://aboutcookies.org/>                                     |
| openInNewTab        | `boolean` | Open the "Read more" button link in a new tab                            | true                                                           |
| cookieTextLabel     | `string`  | Main cookie notice label                                                 | This website uses cookies to improve your browsing experience. |
| reverseButtons      | `boolean` | Reverse buttons direction                                                | false                                                          |
| borderRadius        | `number`  | Cookie notice border radius (in px)                                      | 32                                                             |
| justifyContent      | `string`  | justify-content property for wrapper (`space-around` or `space-between`) | space-between                                                  |
| maxWidth            | `number`  | Maximum cookie notice width                                              | 1000                                                           |

## License

MIT © [xavierbriole](https://github.com/xavierbriole)
