const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

const { shouldBehaveLikeTokenRecover } = require('eth-token-recover/test/TokenRecover.behaviour');

const SampleContract = artifacts.require('SampleContract');

contract('SampleContract', function ([creator, newOwner, anotherAccount]) {
  const value = new BN(1000);

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
        const receipt = await this.contract.creatorDoesWork(value, { from: creator });

        await expectEvent.inTransaction(receipt.tx, SampleContract, 'WorkDone', {
          value: value,
        });
      });
    });

    describe('if another account is calling', function () {
      it('reverts', async function () {
        await expectRevert(
          this.contract.creatorDoesWork(value, { from: anotherAccount }),
          'SampleContract: Caller is not the creator',
        );
      });
    });
  });

  context('calling the ownerDoesWork function', function () {
    beforeEach(async function () {
      await this.contract.transferOwnership(newOwner, { from: creator });
    });

    describe('if owner is calling', function () {
      it('emits a WorkDone event', async function () {
        const receipt = await this.contract.ownerDoesWork(value, { from: newOwner });

        await expectEvent.inTransaction(receipt.tx, SampleContract, 'WorkDone', {
          value: value,
        });
      });
    });

    describe('if another account is calling', function () {
      it('reverts', async function () {
        await expectRevert(
          this.contract.ownerDoesWork(value, { from: anotherAccount }),
          'Ownable: caller is not the owner',
        );
      });
    });
  });

  context('like a TokenRecover', function () {
    beforeEach(async function () {
      this.instance = this.contract;
    });

    shouldBehaveLikeTokenRecover([creator, anotherAccount]);
  });
});
