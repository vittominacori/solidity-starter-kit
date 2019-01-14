# Smart Contract Box

[![Build Status](https://travis-ci.org/vittominacori/solidity-starter-kit.svg?branch=master)](https://travis-ci.org/vittominacori/solidity-starter-kit) 
[![Coverage Status](https://coveralls.io/repos/github/vittominacori/solidity-starter-kit/badge.svg)](https://coveralls.io/github/vittominacori/solidity-starter-kit)


A starter kit for Ethereum Smart Contracts development


## Development

Install Truffle

```bash
npm install -g truffle      // Version 4.1.15+ required
```

### Install dependencies

```bash
npm install
```

### Linter

Use Ethlint

```bash
npm run lint:sol
```

Use ESLint

```bash
npm run lint:js
```

Use both and fix

```bash
npm run lint:fix
```

### Compile and test the contracts
 
Open the Truffle console

```bash
truffle develop
```

Compile 

```bash
compile 
```

Test

```bash
test
```

## Optional

Install the [truffle-flattener](https://github.com/alcuadrado/truffle-flattener)

```bash
npm install -g truffle-flattener
```

Usage 

```bash
truffle-flattener contracts/SampleContract.sol > dist/SampleContract.sol
```

## License

Code released under the [MIT License](https://github.com/vittominacori/solidity-starter-kit/blob/master/LICENSE).
