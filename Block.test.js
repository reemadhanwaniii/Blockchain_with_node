const Block = require('./Block');

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