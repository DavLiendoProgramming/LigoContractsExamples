import { TezosToolkit } from '@taquito/taquito';
import { importKey } from '@taquito/signer';
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
      //smart contract code
      code: `{ parameter int ;
       storage int ;
       code { UNPAIR ; ADD ; NIL operation ; PAIR } }
           `,
      //storage state
      init: `0`,
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
