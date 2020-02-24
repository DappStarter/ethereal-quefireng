require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remind concert grace crew frame ski'; 
let testAccounts = [
"0x0f9431f6da33eb7bf7e290d8703cbbd813a9305e6ccbce06307bc8ea77d35f67",
"0xadf449247f4f65c283209372322660668f903aad1f36dd260c298d81f20f9f9f",
"0x8cfd2e35d0953b0af2cc85e054cb588d192c5efc138a97e5d7e20fb5fd959853",
"0x8dc9a930cb633794adec3f94f3d24a5267c688ea089ab78ab14f33f2e5a6ef3d",
"0xff7cae0a40ee4bcf1df345eb4e43c4f47cf7cd10b662ebe4c20857744487d88e",
"0xa782bb174045d62fc418d7cc066c183f0e152108a30a6887c75ab180d750ba4d",
"0x7fb9589638c6253a03f0808c168b3fd5ef038b8d63b22e9f541d32f1a903c867",
"0x7086e5707c80f65fba9f752c9176a3295491fff6ca8303694911c802f186a98d",
"0x84aed58a94ce36618fe6e5a556c027875392f9da5f6ec5400fde86b056dde4b1",
"0xfecc1cfdc0e133a43c4ed38484b2948e6caf09529d238b535a58a5e8fbf3a95a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
