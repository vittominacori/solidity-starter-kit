const shouldFail = require('openzeppelin-solidity/test/helpers/shouldFail');

const { shouldBehaveLikeOwnable } = require('openzeppelin-solidity/test/ownership/Ownable.behavior');
const { shouldBehaveLikeTokenRecover } = require('eth-token-recover/test/TokenRecover.behaviour');

const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

const SampleContract = artifacts.require('SampleContract');

contract('SampleContract', function ([creator, newOwner, anotherAccount]) {
  const value = new BigNumber(1000);

  beforeEach(async function () {
    this.contract = await SampleContract.new({ from: creator });
  });

  it('message sender should be contract creator', async function () {
    const contractCreator = await this.contract.creator();
    creator.should.equal(contractCreator);
  });

  it('message sender should be contract owner', async function () {
    const contractOwner = await this.contract.owner();
    creator.should.equal(contractOwner);
  });

  context('calling the creatorDoesWork function', function () {
    describe('if creator is calling', function () {
      it('emits a WorkDone event', async function () {
        const { logs } = await this.contract.creatorDoesWork(value, { from: creator });
        assert.equal(logs.length, 1);
        assert.equal(logs[0].event, 'WorkDone');
        logs[0].args.value.should.be.bignumber.equal(value);
      });
    });

    describe('if another account is calling', function () {
      it('reverts', async function () {
        await shouldFail.reverting(this.contract.creatorDoesWork(value, { from: anotherAccount }));
      });
    });
  });

  context('calling the ownerDoesWork function', function () {
    beforeEach(async function () {
      await this.contract.transferOwnership(newOwner, { from: creator });
    });

    describe('if owner is calling', function () {
      it('emits a WorkDone event', async function () {
        const { logs } = await this.contract.ownerDoesWork(value, { from: newOwner });
        assert.equal(logs.length, 1);
        assert.equal(logs[0].event, 'WorkDone');
        logs[0].args.value.should.be.bignumber.equal(value);
      });
    });

    describe('if another account is calling', function () {
      it('reverts', async function () {
        await shouldFail.reverting(this.contract.ownerDoesWork(value, { from: anotherAccount }));
      });
    });
  });

  context('testing ownership', function () {
    beforeEach(async function () {
      this.ownable = this.contract;
    });

    shouldBehaveLikeOwnable(creator, [anotherAccount]);
  });

  context('like a TokenRecover', function () {
    beforeEach(async function () {
      this.instance = this.contract;
    });

    shouldBehaveLikeTokenRecover([creator, anotherAccount]);
  });
});
