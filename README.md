# stylelint-config-css

This package includes the shareable Stylelint configuration used by SF-iTech.

<br>
Please refer to its documentation:

## General

All configurations are based on the [stylelint-config-standard](https://github.com/stylelint/stylelint/blob/master/README.md) and a set of additions.

## Usage

If you want to use this Stylelint configuration in your project, you can install it with the following steps.

First, install this package, Styleint and the necessary plugins.

```sh
yarn add stylelint-config-sf-css
```

Then create a file named `.stylelintrc.json` with following contents in the root folder of your project:

```json
{
  "extends": ["stylelint-config-sf-css"]
}
```

That's it! You can override the settings from `stylelint-config-sf-css` by editing the `.stylelintrc.json` file.

You also need to download a plugin `stylelint` in `VScode`

Learn more about css order [styleint-order](https://github.com/hudochenkov/stylelint-order/blob/master/README.md) on the stylelint-order website.

## License

MIT
