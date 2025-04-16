class Block {
    constructor({timestamp, lastHash, data, hash}) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.data = data;
        this.hash = hash;
    }
}


const block1 = new Block({
    timestamp: new Date(),
    lastHash: "lastHash***",
    data: "Dummy data",
    hash: "SHA@%^"
});

console.log("Block1 ", block1);