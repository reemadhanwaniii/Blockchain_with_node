const {GENESIS_DATA} = require('./config');

class Block {
     constructor({timestamp, lastHash, data, hash}) {
         this.timestamp = timestamp;
         this.lastHash = lastHash;
         this.data = data;
         this.hash = hash;
     }

     static genesis() {
        return new Block(GENESIS_DATA);
        //new this(GENESIS_DATA);
     }

     static mineBlock({lastBlock,data}) {
        console.log(lastBlock,data);
        return new Block({
            timestamp: Date.now(),
            lastHash: lastBlock.hash,
            data
        });
     }
}


module.exports = Block;
