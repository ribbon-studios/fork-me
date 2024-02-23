[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Coveralls][coveralls-image]][coveralls-url]

[![CI Build][github-actions-image]][github-actions-url]
[![Maintainability][maintainability-image]][maintainability-url]
[![Semantic Release][semantic-release-image]][semantic-release-url]
[![Code Style: Prettier][code-style-image]][code-style-url]

# `@rain-cafe/fork-me`

### Usage

```tsx
import { ForkMe } from '@rain-cafe/fork-me';

export function MyApp() {
  return (
    <div>
      My super cool content.
      <ForkMe slug="rain-cafe/fork-me" />
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

[npm-version-image]: https://img.shields.io/npm/v/@rain-cafe/fork-me.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/@rain-cafe/fork-me.svg
[npm-url]: https://npmjs.org/package/@rain-cafe/fork-me
[github-actions-image]: https://img.shields.io/github/actions/workflow/status/rain-cafe/fork-me/ci.yml?event=push
[github-actions-url]: https://github.com/rain-cafe/fork-me/actions/workflows/ci.yml?query=branch%3Amain
[coveralls-image]: https://img.shields.io/coveralls/rain-cafe/fork-me.svg
[coveralls-url]: https://coveralls.io/github/rain-cafe/fork-me?branch=main
[code-style-image]: https://img.shields.io/badge/code%20style-prettier-ff69b4.svg
[code-style-url]: https://prettier.io
[maintainability-image]: https://img.shields.io/codeclimate/maintainability/rain-cafe/fork-me
[maintainability-url]: https://codeclimate.com/github/rain-cafe/fork-me/maintainability
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[semantic-release-image]: https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079
