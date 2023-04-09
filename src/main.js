const { Blockchain, Transactions } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "1521d7015b220d9676d90218fec07567d4a6418e8a43547cc708df6277e9a101"
);
const myWalletAddress = myKey.getPublic("hex");

let blockTiny = new Blockchain();

const tx1 = new Transactions(myWalletAddress, "Public key goes here", -10);
tx1.signTransaction(myKey);
blockTiny.addTransactions(tx1);

console.log("\nStarting the miner...");
blockTiny.minePendingTransactions(myWalletAddress);
console.log(
  "\nBalance of Selena's is ",
  blockTiny.getBalanceOfAddress(myWalletAddress)
);
