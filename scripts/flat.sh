#!/usr/bin/env bash

CONTRACT_NAME=SampleContract

truffle-flattener contracts/$CONTRACT_NAME.sol > dist/$CONTRACT_NAME.dist.sol
