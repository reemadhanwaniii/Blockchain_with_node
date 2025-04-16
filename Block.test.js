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
    it("genesis is instance of Block",() => {
        expect(genesisBlock instanceof Block).toBe(true);
    });

    it("Should contain genesis data",() => {
        expect(genesisBlock).toEqual(GENESIS_DATA);
    })
})