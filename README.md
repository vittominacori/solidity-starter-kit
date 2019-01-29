---
title: Easily build your smart contracts
---

# Solidity Starter Kit

[![Build Status](https://travis-ci.org/vittominacori/solidity-starter-kit.svg?branch=master)](https://travis-ci.org/vittominacori/solidity-starter-kit) 
[![Coverage Status](https://coveralls.io/repos/github/vittominacori/solidity-starter-kit/badge.svg)](https://coveralls.io/github/vittominacori/solidity-starter-kit)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)


A starter kit for Ethereum Smart Contracts development


## Development

Install Truffle if you want to run your own node

Version 4.1.15 required

```bash
npm install -g truffle@4.1.15
```

### Install dependencies

```bash
npm install
```

### Linter

Use Solhint

```bash
npm run lint:sol
```

Use ESLint

```bash
npm run lint:js
```

Use ESLint and fix

```bash
npm run lint:fix
```

## Usage
 
### Compile

```bash
npm run compile
```

### Test 

```bash
npm run test 
```

### Code Coverage

```bash
npm run coverage
```

### Profiling

```bash
npm run profile
```

## Optional

### Flattener

Install the [truffle-flattener](https://github.com/alcuadrado/truffle-flattener)

```bash
npm install -g truffle-flattener
```

Usage 

```bash
truffle-flattener contracts/SampleContract.sol > dist/SampleContract.sol
```

## License

Code released under the [MIT License](./LICENSE).
