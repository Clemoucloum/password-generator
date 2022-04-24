# Password Generator Tool

![Banner representing the Password Generator Tool](https://raw.githubusercontent.com/sebastienrousseau/password-generator/master/images/password-generator-logo.svg)

A fast, simple and powerful open-source utility tool for generating strong, unique and random passwords. Password Generator is free to use as a secure password generator on any computer, phone, or tablet.

[![Getting Started](https://raw.githubusercontent.com/sebastienrousseau/password-generator/master/images/button-primary.svg)](#installation)
[![Download the Password Generator Tool v1.0.6](https://raw.githubusercontent.com/sebastienrousseau/password-generator/master/images/button-secondary.svg)](https://github.com/sebastienrousseau/password-generator/archive/refs/tags/1.0.6.zip)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/0acb169c95e443729551979e0fd86eaf)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=sebastienrousseau/password-generator&utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/v/@sebastienrousseau/password-generator.svg?style=flat&color=success)](https://www.npmjs.com/package/@sebastienrousseau/password-generator)
[![Release Notes](https://img.shields.io/badge/release-notes-success.svg)](https://github.com/sebastienrousseau/password-generator/releases/)
[![npm](https://img.shields.io/npm/dm/password-generator.svg?style=flat)](https://www.npmjs.com/package/@sebastienrousseau/password-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-success.svg?style=flat)](https://opensource.org/licenses/MIT)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsebastienrousseau%2Fpassword-generator.svg?type=small)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsebastienrousseau%2Fpassword-generator?ref=badge_small)

## 🔧 Installation

### From NPM or YARN

To install the Password Generator Tool, use either npm or yarn as follows:

-   `npm i @sebastienrousseau/password-generator`
-   `yarn add @sebastienrousseau/password-generator`

### From GitHub

Clone the main repository to get all source files including build scripts: `git clone https://github.com/sebastienrousseau/password-generator.git`

## ❓ What's included

Within the download you'll find all the password generator source files grouped into the _dist_ folder.

You'll see something like this:

```shell
.
├── COPYRIGHT
├── LICENSE
├── Makefile
├── README.md
├── babel.config.js
├── bower.json
├── package-lock.json
├── package.json
└── src
    ├── bin
    │   └── index.js
    ├── dictionaries
    │   ├── adjectives.json
    │   ├── adverbs.json
    │   ├── animals.json
    │   ├── cars.json
    │   ├── cities.json
    │   ├── common.json
    │   ├── countries.json
    │   ├── dinosaurs.json
    │   ├── emoji.json
    │   ├── encouraging.json
    │   ├── ergative.json
    │   ├── fruits.json
    │   ├── gemstones.json
    │   ├── hazards.json
    │   ├── instruments.json
    │   ├── lovecraft.json
    │   ├── metals.json
    │   ├── music.json
    │   ├── nouns.json
    │   ├── prepositions.json
    │   ├── shakespeare.json
    │   ├── sports.json
    │   ├── strange.json
    │   ├── vegetables.json
    │   └── winds.json
    ├── images
    │   ├── button-primary.svg
    │   ├── button-secondary.svg
    │   └── password-generator-logo.svg
    ├── lib
    │   ├── base64-password.js
    │   ├── complex-password.js
    │   ├── memorable-password.js
    │   └── password-generator.js
    └── utils
        ├── README.md
        ├── randomConsonant.js
        ├── randomNumber.js
        ├── randomSyllable.js
        ├── randomVowel.js
        ├── toCamelCase.js
        ├── toKebabCase.js
        ├── toSnakeCase.js
        └── toTitleCase.js

6 directories, 50 files
```

## 💿 Usage

### From the CLI

```shell
node .
```

Displays the following help menu

```shell
Usage: password-generator [options]

A fast, simple and powerful open-source utility tool for generating strong, unique and random passwords

Options:
  -v, --version              output the current version
  -t, --type <type>          specify a password type (default: "base64, complex or memorable")
  -l, --length <numbers>     specify a length for each iteration
  -i, --iteration <numbers>  specify a number of iteration
  -s, --separator <char>     specify a character for the separator
  -h, --help                 display help for command
```

### From Node.js

```shell
var generatePassword = require('password-generator');
```

### From the Browser

```shell
<script src="<https://raw.githubusercontent.com/sebastienrousseau/password-generator/master/src/bin/password-generator.js>" type="text/javascript"></script>
```

## 🔐 Password options

### Generating a random base64 password

```shell
node . -t base64 -l 8 -i 4 -s - 
```

### Generating a strong password

```shell
node . -t complex -l 8 -i 4 -s -
```

### Generating a memorable password

```shell
node . -t memorable -i 4 -s - 
```

## 🚥 Semantic Versioning Policy

For transparency into our release cycle and in striving to maintain backward compatibility, `password-generator` follows [semantic versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## ✅ Changelog

-   [GitHub Releases](https://github.com/sebastienrousseau/password-generator/releases)

## ❤️ Contributing

Please read carefully through our [Contributing Guidelines](https://github.com/sebastienrousseau/password-generator/blob/master/.github/CONTRIBUTING.md) for further details on the process for submitting pull requests to us.

Development Tools

-   `npm test` runs tests and measures coverage.
-   `npm run coverage` shows the coverage result of npm test command.
-   `npm run clean` removes the coverage result of npm test command.

## 📖 Rules

We are committed to preserving and fostering a diverse, welcoming community. Please read our [Code of Conduct](https://github.com/sebastienrousseau/password-generator/blob/master/.github/CODE-OF-CONDUCT.md).

## ⭐️ Our Values

-   We believe perfection must consider everything.
-   We take our passion beyond code into our daily practices.
-   We are just obsessed about creating and delivering exceptional solutions.

## ⚖️ License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/sebastienrousseau/password-generator/blob/master/LICENSE) file for details

## 🏢 Acknowledgements

[The Password Generator Tool](https://password-generator.pro) is beautifully crafted by these people and a bunch of awesome [contributors](https://github.com/sebastienrousseau/password-generator/graphs/contributors)

| Contributors                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- |
| [![Sebastien Rousseau](https://avatars0.githubusercontent.com/u/1394998?s=117)](https://sebastienrousseau.co.uk) |
| [Sebastien Rousseau](https://github.com/sebastienrousseau)                                                       |

Made with ❤ in London.
