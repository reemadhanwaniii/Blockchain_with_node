const Block = require('./Block');
const { GENESIS_DATA } = require('./config');

describe('Block',() => {
    const timestamp = new Date();
    const lastHash = "lastHash";
    const hash = "Hash";
    const data = ['Blockchain','CDW'];
    const block = new Block({timestamp,lastHash,hash,data});

    it("it contains timestamp,hash, lastHash and data property",() => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });
});


describe('genesis()',() => {
    const genesisBlock = Block.genesis();

    console.log(genesisBlock);

    it("genesis is instance of Block",() => {
        expect(genesisBlock instanceof Block).toBe(true);
    });

    it("Should contain genesis data",() => {
        expect(genesisBlock).toEqual(GENESIS_DATA);
    })
});

describe('mineBlock() ',() => {
    const lastBlock = Block.genesis();
    const data = "mined data";
    const minedBlock = Block.mineBlock({lastBlock,data});

    it('returns instance of block',() => {
        expect(minedBlock instanceof Block).toBe(true);
    });

    it("sets `lasthash` to be the `hash` of last block",() => {
        expect(minedBlock.lastHash).toEqual(lastBlock.hash);
    });

    it("sets `data` of the mined block",() => {
        expect(minedBlock.data).toEqual(data);
    });

    it("sets timestamp of block",() => {
        expect(minedBlock.timestamp).not.toEqual(undefined);
    });
});