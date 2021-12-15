import { token_transfer } from './token-transfer';

const RPC_URL = 'https://granadanet.smartpy.io/';
const CONTRACT = 'KT19JdCW4s9iGTafexamTGAYQ4aZF62CVpdX'; //address of the published contract
const SENDER = 'tz1STSXqr1JDhYPsYQvP8nLE27bUts1qe9dL'; //public address of the sender (find it in acc.json)
const RECEIVER = 'tz1Kz33jTDRu1DoHmzXTEkPgGRBd7cgWBnnx'; // recipient's public address (take it from the Tezos wallet you had created)
const AMOUNT = 100; //number of tokens to be sent, you can put another value here
new token_transfer(RPC_URL).transfer(CONTRACT, SENDER, RECEIVER, AMOUNT);
