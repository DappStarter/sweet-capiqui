require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict robot flock tribe stomach radar script comfort install end army giant'; 
let testAccounts = [
"0xbc3a1653042fc21a4418d42577c640f25adcc539ed2cb82b75cc59af9dfbe8f9",
"0x702e2a8f6c0e825918f2f9ab2ea5c539e7c5b1aea47185a3568206a73ffd1e7e",
"0xe03f30c9aa9e8c594283fd50de68f15a4ae3f55c980cf644b170f6650a1c3ec0",
"0xc8327c9c15cc6b2bea9b4031260e094d9a30959a2a10e54c2e7ae1d59b3eb6c7",
"0xa6ff67a21f3dbd192a8ee91e906f689242e738fe77c729231b906b5f615272e8",
"0x08d5f8c0e2a1b413b45791684394e6f674206f71847493a711e1f70fb0d6fbf4",
"0xa1a6410ff072f92eebcdb86beccfbde98f2ad5448bc2193004b321f74c3411b2",
"0x7fd519543051da5551ccf868bdca1fb25cd9d93f9d23fa8e6039e5199d276e8c",
"0x75e085d189be14fe409ccc4c028f3b6835cd69753991a6c5ca26cb2eaece5f3d",
"0x1585ad3a23ce1db1d9c2203d4792d4e6295c58bc5b98a8f79866021021ae1129"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

