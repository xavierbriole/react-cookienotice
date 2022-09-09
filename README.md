# react-cookienotice

> A lightweight & customizable cookie banner for your React App

![Preview Light](screenshots/light.png)

[![NPM](https://img.shields.io/npm/v/react-cookienotice.svg)](https://www.npmjs.com/package/react-cookienotice)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![codecov](https://codecov.io/gh/xavierbriole/react-cookienotice/branch/master/graph/badge.svg?token=256VJO28DU)](https://codecov.io/gh/xavierbriole/react-cookienotice)
[![npm-publish](https://github.com/xavierbriole/react-cookienotice/workflows/npm-publish/badge.svg)](https://github.com/xavierbriole/react-cookienotice/actions/workflows/npm-publish.yml)
[![downloads](https://img.shields.io/badge/dynamic/json?color=blue&label=downloads&query=downloads&suffix=%2Fmonth&url=https%3A%2F%2Fapi.npmjs.org%2Fdownloads%2Fpoint%2Flast-month%2Freact-cookienotice)](http://npm-stats.org/#/react-cookienotice)
[![storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://react-cookienotice.vercel.app)

- 🍃 No dependency, full self-made package (1.4 kB - [BundlePhobia](https://bundlephobia.com/package/react-cookienotice))
- 📱 Mobile first & responsive
- ⚙️ Customizable with several props
- 🍕 Very fast setup (less than 1 minute)
- 🧪 Tested with functionals tests
- 🌙 Dark mode based on system settings
- 🌎 Translated in French & English ([create issue](https://github.com/xavierbriole/react-cookienotice/issues/new) for more languages)

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

All props are optionals.

If you want a "Read More" link, you must set all of the following props:

- `readMoreLabel`
- `readMoreLink`
- `readMoreInNewTab`

| Key                  | Type       | Description                                                          | Default value                                                                                                                                              |
| -------------------- | ---------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| acceptButtonLabel    | `string`   | The label for the accept button.                                     | Accept                                                                                                                                                     |
| onAcceptButtonClick  | `Function` | A callback function to be called when the accept button is clicked.  | -                                                                                                                                                          |
| declineButtonLabel   | `string`   | The label for the decline button.                                    | Decline                                                                                                                                                    |
| onDeclineButtonClick | `Function` | A callback function to be called when the decline button is clicked. | -                                                                                                                                                          |
| titleLabel           | `string`   | The title for the cookie banner.                                     | Cookie consent                                                                                                                                             |
| descriptionLabel     | `string`   | The description for the cookie banner.                               | By clicking "Accept", you consent to our website's use of cookies to provide you with the most relevant experience by remembering your cookie preferences. |
| readMoreLabel        | `string`   | The label for the read more link.                                    | -                                                                                                                                                          |
| readMoreLink         | `string`   | The link for the read more label.                                    | -                                                                                                                                                          |
| readMoreInNewTab     | `boolean`  | Whether the read more link should open in a new tab.                 | -                                                                                                                                                          |
| hideDeclineButton    | `boolean`  | This will hide the decline button.                                   | -                                                                                                                                                          |
| cookieExpiration     | `number`   | Days after cookie expires and user should reaccept cookies.          | 30                                                                                                                                                         |
| cookieName           | `string`   | The name of the cookie that saves the user consent.                  | hide-notice                                                                                                                                                |

## License

MIT © [xavierbriole](https://github.com/xavierbriole)
