# react-cookienotice

> A lightweight & customizable cookie banner for your React App

![Preview Light](screenshots/light.png)

[![npm](https://badgen.net/npm/v/react-cookienotice)](https://www.npmjs.com/package/react-cookienotice)
[![npm@next](https://badgen.net/npm/v/react-cookienotice/next)](https://www.npmjs.com/package/react-cookienotice)
[![coverage](https://badgen.net/codecov/c/github/xavierbriole/react-cookienotice)](https://codecov.io/gh/xavierbriole/react-cookienotice)
[![minzipped](https://badgen.net/bundlephobia/minzip/react-cookienotice)](https://bundlephobia.com/package/react-cookienotice)
[![downloads](https://badgen.net/npm/dw/react-cookienotice)](http://npm-stats.org/#/react-cookienotice)
[![storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://react-cookienotice.vercel.app)

- 🍃 No dependency, full self-made package ([Bundlephobia](https://bundlephobia.com/package/react-cookienotice))
- 📱 Mobile first & responsive
- ⚙️ Customizable with several props
- ⏱️ Very fast setup (less than 1 minute)
- 🧪 Tested with unit & functional tests
- 🌙 Dark mode based on system settings
- 🌎 Translated in Deutsch, English, Español, Français, Italiano, 한국인, Occitan & 中文 ([create issue](https://github.com/xavierbriole/react-cookienotice/issues/new) or [submit pull request](https://github.com/xavierbriole/react-cookienotice/compare) for more languages)

## Install

### npm

```bash
npm i --save react-cookienotice
```

### Yarn

```bash
yarn add react-cookienotice
```

## Usage

```tsx
import React from 'react'
import { CookieNotice } from 'react-cookienotice'
import 'react-cookienotice/dist/style.css'

const Example = () => <CookieNotice />

export default Example
```

## Props

All props are optionals.

If you want a "Read More" link, you must set all of the following props:

- `readMoreLabel`
- `readMoreLink`
- `readMoreInNewTab`

| Key                  | Type       | Description                                                          | Default value                                                                                                                                                                             |
| -------------------- | ---------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| acceptButtonLabel    | `string`   | The label for the accept button.                                     | Accept (translated in browser language)                                                                                                                                                   |
| onAcceptButtonClick  | `Function` | A callback function to be called when the accept button is clicked.  | If not passed, it removes Accept button                                                                                                                                                   |
| declineButtonLabel   | `string`   | The label for the decline button.                                    | Decline (translated in browser language)                                                                                                                                                  |
| onDeclineButtonClick | `Function` | A callback function to be called when the decline button is clicked. | If not passed, it removes Decline button                                                                                                                                                  |
| titleLabel           | `string`   | The title for the cookie banner.                                     | Cookie consent (translated in browser language)                                                                                                                                           |
| descriptionLabel     | `string`   | The description for the cookie banner.                               | By clicking Accept, you consent to our website's use of cookies to provide you with the most relevant experience by remembering your cookie preferences. (translated in browser language) |
| readMoreLabel        | `string`   | The label for the read more link.                                    | -                                                                                                                                                                                         |
| readMoreLink         | `string`   | The link for the read more label.                                    | -                                                                                                                                                                                         |
| readMoreInNewTab     | `boolean`  | Whether the read more link should open in a new tab.                 | -                                                                                                                                                                                         |
| cookieExpiration     | `number`   | Days after cookie expires and user should reaccept cookies.          | 30                                                                                                                                                                                        |
| cookieName           | `string`   | The name of the cookie that saves the user consent.                  | hide-notice                                                                                                                                                                               |

## License

MIT © [xavierbriole](https://github.com/xavierbriole)
