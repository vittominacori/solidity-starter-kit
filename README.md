---
title: Easily build your smart contracts
---

# Solidity Starter Kit

[![Build Status](https://travis-ci.org/vittominacori/solidity-starter-kit.svg?branch=master)](https://travis-ci.org/vittominacori/solidity-starter-kit) 
[![Coverage Status](https://coveralls.io/repos/github/vittominacori/solidity-starter-kit/badge.svg)](https://coveralls.io/github/vittominacori/solidity-starter-kit)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/vittominacori/solidity-starter-kit/blob/master/LICENSE)


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

## Flattener

This allow to flatten the code into a single file

```bash
truffle-flattener contracts/SampleContract.sol > dist/SampleContract.sol
```

## Analysis

Note: it is better to analyze the flattened code to have a bigger overview on the entire codebase

### Describe

The `describe` command shows a summary of the contracts and methods in the files provided

```bash
surya describe dist/SampleContract.sol
```

### Dependencies

The `dependencies` command outputs the c3-linearization of a given contract's inheirtance graph. Contracts will be listed starting with most-derived, ie. if the same function is defined in more than one contract, the solidity compiler will use the definition in whichever contract is listed first

```bash
surya dependencies SampleContract dist/SampleContract.sol
```

### Inheritance Tree

The `inheritance` command outputs a DOT-formatted graph of the inheritance tree

```bash
surya inheritance dist/SampleContract.sol | dot -Tpng > analysis/inheritance-tree/SampleContract.png
```

### Control Flow

The `graph` command outputs a DOT-formatted graph of the control flow

```bash
surya graph dist/SampleContract.sol | dot -Tpng > analysis/control-flow/SampleContract.png
```

### Description Table

The `mdreport` command creates a markdown description report with tables comprising information about the system's files, contracts and their functions

```bash
surya mdreport analysis/description-table/SampleContract.md dist/SampleContract.sol
```

## License

Code released under the [MIT License](https://github.com/vittominacori/solidity-starter-kit/blob/master/LICENSE).
