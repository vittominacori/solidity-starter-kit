# Smart Contract - Console

## Usage

### Load Artifact

```javascript
App.initContract('ContractName');
```

### Get Contract with Address

```javascript
const myContract = await App.getContract('ContractName', '0x123...');

// myContract.methods.myMethod([param1[, param2[, ...]]]).call(options [, defaultBlock] [, callback])
// myContract.methods.myMethod([param1[, param2[, ...]]]).send(options[, callback])
```

### Deploy Contract with Arguments

```javascript
App.deployContract('ContractName', ['arg1', 'arg2']);
```
