# FA2 Contracts Examples

This repository contains multiple sub-projects implementing different logic for the FA2 token standard.

## Working Contracts

### multi_asset3

Implementation of the FA2 contract that supports multiple fungible tokens (a.k.a. ERC-1155) that allows pausing transfers on individual tokens.

### nft_asset2

Implementation of the NFT FA2 contract (a.k.a. ERC-721). The contract supports multiple "families" of NFT tokens that share the same token metadata.

### For deploying a contract

First we need to compile the main contract, for example:

ligo compile contract ./contracts/multi_asset3/fa2_granular_multi_asset.mligo -e multi_asset_main -s cameligo -o ./contracts/multi_asset3/fa2_granular_multi_asset_output.tz

Then, we need to compile the storage:

ligo compile storage ./contracts/multi_asset3/fa2_granular_multi_asset.mligo "` cat ./contracts/multi_asset3/storage_example.mligo`" -e multi_asset_main -s cameligo -o ./contracts/multi_asset3/storage_output.tz

After that, we deploy:

tezos-client -E https://hangzhounet.api.tez.ie originate contract fa2_multi_asset transferring 1 from faucet running contracts/multi_asset3/fa2_granular_multi_asset_output.tz --init "`cat contracts/multi_asset3/storage_output.tz`" --burn-cap 2 --force

For a different admin address only change the address on the storage mligo file.
