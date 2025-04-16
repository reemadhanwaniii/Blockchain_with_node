const dotenv = require('dotenv');
dotenv.config();

const GENESIS_DATA = {
    timestamp: new Date(),
    lastHash: process.env.lastHash,
    hash: process.env.hash,
    data: []
};


module.exports = {
    GENESIS_DATA: GENESIS_DATA
}

