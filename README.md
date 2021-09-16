# react-cookienotice

> A lightweight & customizable cookie banner for your React App

![Preview Light](screenshots/light.png)
![Preview Dark](screenshots/dark.png)

[![NPM](https://img.shields.io/npm/v/react-cookienotice.svg)](https://www.npmjs.com/package/react-cookienotice)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![codecov](https://codecov.io/gh/xavierbriole/react-cookienotice/branch/master/graph/badge.svg?token=256VJO28DU)](https://codecov.io/gh/xavierbriole/react-cookienotice)
![npm-publish](https://github.com/xavierbriole/react-cookienotice/workflows/npm-publish/badge.svg)
![downloads](https://img.shields.io/badge/dynamic/json?color=blue&label=downloads&query=downloads&suffix=%2Fmonth&url=https%3A%2F%2Fapi.npmjs.org%2Fdownloads%2Fpoint%2Flast-month%2Freact-cookienotice)

[Live preview](https://react-cookienotice.vercel.app)

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

```tsx
import React from 'react'

import CookieNotice from 'react-cookienotice'
import 'react-cookienotice/dist/index.css'

const Example = () => <CookieNotice />

export default Example
```

## Props

All props are optionals

| Key                        | Type       | Description                                                | Default value                                                  |
| -------------------------- | ---------- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| acceptButtonLabel          | `string`   | Edit the "Accept" button label                             | Accept                                                         |
| readMoreButtonLabel        | `string`   | Edit the "Read more" button label                          | Read more                                                      |
| readMoreButtonLink         | `string`   | Edit the "Read more" button link                           | <http://aboutcookies.org/>                                     |
| readMoreButtonOpenInNewTab | `boolean`  | Open the "Read more" button link in a new tab              | true                                                           |
| cookieTextLabel            | `string`   | Main cookie notice label                                   | This website uses cookies to improve your browsing experience. |
| cookieExpiration           | `number`   | Days after cookie expires and user should reaccept cookies | 30                                                             |
| cookieName                 | `string`   | The name of the cookie that saves the user consent         | allow-cookies                                                  |
| onAcceptButtonClick        | `Function` | A callback function called after the "Accept" button click | -                                                              |

## License

MIT © [xavierbriole](https://github.com/xavierbriole)
