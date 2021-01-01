/* global Web3 */

const App = {
  coinbase: null,
  web3: null,
  web3Provider: null,
  artifacts: [],
  promisify (fn, ...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
  initWeb3: async function () {
    if (typeof window.ethereum !== 'undefined') {
      console.log('Injected Ethereum');

      this.web3Provider = window.ethereum;

      this.web3 = new Web3(window.ethereum);

      await this.web3Provider.request({ method: 'eth_requestAccounts' });

      this.coinbase = await this.promisify(this.web3.eth.getCoinbase);
    } else {
      console.log('No MetaMask found');
    }
  },
  initContract: function (contractName) {
    fetch(`${contractName}.json`)
      .then((response) => response.json())
      .then((contract) => {
        this.artifacts[contractName] = contract;
      })
      .catch(error => console.log(error));
  },
  getContract: function (contractName, address) {
    return new this.web3.eth.Contract(
      this.artifacts[contractName].abi,
      address,
    );
  },
  deployContract: function (contractName, args) {
    const contract = new this.web3.eth.Contract(this.artifacts[contractName].abi);

    contract.deploy({
      data: this.artifacts[contractName].bytecode,
      arguments: args,
    })
      .send({
        from: this.coinbase,
      })
      .on('error', (error) => {
        console.log(error.message);
      })
      .on('transactionHash', (transactionHash) => {
        console.log(transactionHash);
      })
      .on('receipt', (receipt) => {
        console.log(receipt);
      });
  },
};

App.initWeb3();
