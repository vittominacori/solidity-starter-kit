---
title: Easily build your smart contracts
---

# Solidity Starter Kit

[![Build Status](https://travis-ci.org/vittominacori/solidity-starter-kit.svg?branch=master)](https://travis-ci.org/vittominacori/solidity-starter-kit) 
[![Coverage Status](https://coveralls.io/repos/github/vittominacori/solidity-starter-kit/badge.svg)](https://coveralls.io/github/vittominacori/solidity-starter-kit)
[![MIT licensed](https://img.shields.io/github/license/vittominacori/solidity-starter-kit.svg)](https://github.com/vittominacori/solidity-starter-kit/blob/master/LICENSE)


A starter kit for Ethereum Smart Contracts development


## Development

### Install dependencies

```bash
npm install
```

## Usage

Open the Truffle console

```bash
npm run console
```

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

## Linter

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

## Flattener

This allow to flatten the code into a single file

Edit `scripts/flat.sh` to add your contracts

```bash
npm run flat
```

## Analysis

Note: it is better to analyze the flattened code to have a bigger overview on the entire codebase. So run the flattener first.

### Describe

The `describe` command shows a summary of the contracts and methods in the files provided

```bash
surya describe dist/SampleContract.dist.sol
```

### Dependencies

The `dependencies` command outputs the c3-linearization of a given contract's inheirtance graph. Contracts will be listed starting with most-derived, ie. if the same function is defined in more than one contract, the solidity compiler will use the definition in whichever contract is listed first.

```bash
surya dependencies SampleContract dist/SampleContract.dist.sol
```
### Generate Report

Edit `scripts/analyze.sh` to add your contracts 

```bash
npm run analyze
```

The `inheritance` command outputs a DOT-formatted graph of the inheritance tree.

The `graph` command outputs a DOT-formatted graph of the control flow.

The `mdreport` command creates a markdown description report with tables comprising information about the system's files, contracts and their functions.

## License

Code released under the [MIT License](https://github.com/vittominacori/solidity-starter-kit/blob/master/LICENSE).
