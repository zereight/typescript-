"use strict";
var Block = /** @class */ (function () {
    function Block(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
    return Block;
}());
var generateBlock = new Block(0, "1234", "123", "Hi", 2020);
var blockChain = [generateBlock];
console.log(blockChain);
