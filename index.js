const createHash = (data) => {
    return data+'*';
}


class Block {
    constructor(data, hash, lastHash) {
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    }
}


class Blockchain {
    constructor() {
        const genesisBlock = new Block('gen-data','gen-hash','gen-lastHash');
        this.chain = [genesisBlock];
    }


    addBlock(data) {
        const lastHash = this.chain[this.chain.length-1].hash;
        const hash = createHash(data+lastHash);
        const block = new Block(data,hash,lastHash);

        this.chain.push(block);
    }
}

const dummyBlockchain = new Blockchain();
dummyBlockchain.addBlock('one-block');
dummyBlockchain.addBlock('two-block');
dummyBlockchain.addBlock('third-block');

console.log(dummyBlockchain);