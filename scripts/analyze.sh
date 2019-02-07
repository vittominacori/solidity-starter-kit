#!/usr/bin/env bash

surya inheritance dist/SampleContract.dist.sol | dot -Tpng > analysis/inheritance-tree/SampleContract.png

surya graph dist/SampleContract.dist.sol | dot -Tpng > analysis/control-flow/SampleContract.png

surya mdreport analysis/description-table/SampleContract.md dist/SampleContract.dist.sol
