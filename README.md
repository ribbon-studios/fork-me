**This repository has moved to https://codeberg.org/ribbon-studios/fork-me**

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Coverage][coverage-image]][coverage-url]

[![CI Build][build-image]][build-url]
[![Semantic Release][semantic-release-image]][semantic-release-url]
[![Code Style: Prettier][code-style-image]][code-style-url]

# `@ribbon-studios/fork-me`

![example](https://codeberg.org/ribbon-studios/fork-me/raw/branch/main/screenshots/example.png)

### Usage

```tsx
import { ForkMe } from '@ribbon-studios/fork-me';

export function MyApp() {
  return (
    <div>
      My super cool content.
      <ForkMe slug="ribbon-studios/fork-me" />
    </div>
  );
}
```

### Properties

| Name            | Description                                           | Optional?                   |
| --------------- | ----------------------------------------------------- | --------------------------- |
| slug            | The slug of your repository                           | No                          |
| side            | The side you'd like the octocat to appear!            | Yes (defaults to `'right'`) |
| backgroundColor | The ribbon color                                      | Yes (defaults to `'black'`) |
| color           | The octocat color                                     | Yes (defaults to `'white'`) |
| newTab          | Set this to false to make it open in the current tab. | Yes (defaults to `true`)    |

[_**Want to Contribute?**_](/CONTRIBUTING.md)

[npm-version-image]: https://img.shields.io/npm/v/@ribbon-studios/fork-me.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/@ribbon-studios/fork-me.svg
[npm-url]: https://npmjs.org/package/@ribbon-studios/fork-me
[build-image]: https://codeberg.org/ribbon-studios/fork-me/badges/workflows/ci.yml/badge.svg?branch=main
[build-url]: https://codeberg.org/ribbon-studios/fork-me/actions?workflow=ci.yml&branch=main
[coverage-image]: https://ribbon-studios.codeberg.page/fork-me/badge.svg
[coverage-url]: https://ribbon-studios.codeberg.page/fork-me
[code-style-image]: https://img.shields.io/badge/code%20style-prettier-ff69b4.svg
[code-style-url]: https://prettier.io
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[semantic-release-image]: https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079
