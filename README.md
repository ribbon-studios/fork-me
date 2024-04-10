[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Coveralls][coveralls-image]][coveralls-url]

[![CI Build][github-actions-image]][github-actions-url]
[![Maintainability][maintainability-image]][maintainability-url]
[![Semantic Release][semantic-release-image]][semantic-release-url]
[![Code Style: Prettier][code-style-image]][code-style-url]

# `@ribbon-studios/fork-me`

![example](https://github.com/ribbon-studios/fork-me/assets/9692284/37b8dfad-3d35-43e2-aa23-041b174974e6)

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
[github-actions-image]: https://img.shields.io/github/actions/workflow/status/ribbon-studios/fork-me/ci.yml?event=push
[github-actions-url]: https://github.com/ribbon-studios/fork-me/actions/workflows/ci.yml?query=branch%3Amain
[coveralls-image]: https://img.shields.io/coveralls/ribbon-studios/fork-me.svg
[coveralls-url]: https://coveralls.io/github/ribbon-studios/fork-me?branch=main
[code-style-image]: https://img.shields.io/badge/code%20style-prettier-ff69b4.svg
[code-style-url]: https://prettier.io
[maintainability-image]: https://img.shields.io/codeclimate/maintainability/ribbon-studios/fork-me
[maintainability-url]: https://codeclimate.com/github/ribbon-studios/fork-me/maintainability
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[semantic-release-image]: https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079
