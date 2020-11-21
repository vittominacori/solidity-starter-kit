#!/usr/bin/env bash

npm run hardhat:compile
npm run hardhat:coverage

cat coverage/lcov.info | coveralls
