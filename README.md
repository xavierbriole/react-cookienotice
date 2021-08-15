# react-cookienotice

> An awesome cookie banner for your website

![Preview Light](screenshots/light.png)
![Preview Dark](screenshots/dark.png)

[![NPM](https://img.shields.io/npm/v/react-cookienotice.svg)](https://www.npmjs.com/package/react-cookienotice)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![codecov](https://codecov.io/gh/xavierbriole/react-cookienotice/branch/master/graph/badge.svg?token=256VJO28DU)](https://codecov.io/gh/xavierbriole/react-cookienotice)
![npm-publish](https://github.com/xavierbriole/react-cookienotice/workflows/npm-publish/badge.svg)
![downloads](https://img.shields.io/badge/dynamic/json?color=blue&label=downloads&query=downloads&suffix=%2Fmonth&url=https%3A%2F%2Fapi.npmjs.org%2Fdownloads%2Fpoint%2Flast-month%2Freact-cookienotice)

[Live preview](https://xavierbriole.github.io/react-cookienotice)

## Install

### Yarn

```bash
yarn add react-cookienotice
```

### npm

```bash
npm i --save react-cookienotice
```

## Usage

```jsx
import * as React from 'react'
import CookieNotice from 'react-cookienotice'

class Example extends React.Component {
  render() {
    return <CookieNotice />
  }
}
```

## Props

All props are optionals

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
| cookieExpiration    | `number`  | Days after cookie expires and user should reaccept cookies               | 30                                                             |
| cookieName          | `string`  | The name of the cookie that saves the user consent                       | allow-cookies                                                  |
| darkTheme           | `boolean` | Enable dark theme                                                        | Auto                                                           |
| displayIcon         | `boolean` | Display the icon                                                         | true                                                           |


## License

MIT © [xavierbriole](https://github.com/xavierbriole)
