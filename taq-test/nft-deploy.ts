import { TezosToolkit } from '@taquito/taquito';
import { importKey } from '@taquito/signer';
const fs = require('fs');
const { Tezos } = require('@taquito/taquito');
const provider = 'https://granadanet.smartpy.io/';

async function deploy() {
  console.log('Starting process..');
  const tezos = new TezosToolkit(provider);
  try {
    await importKey(
      tezos,
      'btqnvxmz.vpohjlbc@tezos.example.org', //mail
      'z4t5JmZ4aU', //password
      [
        'nut',
        'weasel',
        'bundle',
        'round',
        'exclude',
        'arm',
        'long',
        'tissue',
        'laundry',
        'device',
        'true',
        'aspect',
        'hill',
        'believe',
        'desert',
      ].join(' '),
      '4ec99a4c5aeb3c87ce5c2dfd9dec438ce8847227' //private key
    );

    const op = await tezos.contract.originate({
      // reading code from token.json
      code: JSON.parse(fs.readFileSync('../contracts/FA2/fa2.json').toString()),
      // setting the storage state in Michelson. Replace both addresses with your account address on the testnet, and numbers with the number of tokens you want to issue.
      //Remember to put 0x before the bytedata for metadata
      init:
        '(Pair (Pair { Elt 1 "tz1STSXqr1JDhYPsYQvP8nLE27bUts1qe9dL" } { Elt "" 0x68747470733a2f2f676973742e67697468756275736572636f6e74656e742e636f6d2f4461764c69656e646f50726f6772616d6d696e672f31616139306331353264666464633737393063326130363835383963613761382f7261772f613136633234393237376234316530383362626663333165336338386333663264623165643735612f636f6e74726163745f6d6574612e6a736f6e }) { Elt (Pair "tz1STSXqr1JDhYPsYQvP8nLE27bUts1qe9dL" "tz1STSXqr1JDhYPsYQvP8nLE27bUts1qe9dL" 1) Unit } { Elt 0 (Pair 1 { Elt "" 0x68747470733a2f2f676973742e67697468756275736572636f6e74656e742e636f6d2f4461764c69656e646f50726f6772616d6d696e672f35653233343839313066643064613333323436616533366561623739303236322f7261772f393436396536323636353461663434346264383862303164653439313937653738383065326166632f6d6574616461746174657a6f732e6a736f6e }) })',
    });

    //beginning to deploy
    console.log('Awaiting confirmation...');
    const contract = await op.contract();
    //deployment report: amount of used gas, storage state
    console.log('Gas Used', op.consumedGas);
    console.log('Storage', await contract.storage());
    //operation hash one can use to find the contract in the explorer
    console.log('Operation hash:', op.hash);
  } catch (ex) {
    console.error(ex);
  }
}

try {
  deploy();
} catch (error) {
  console.log(error);
}
