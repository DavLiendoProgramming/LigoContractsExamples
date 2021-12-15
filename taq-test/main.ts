import { App } from './app';
import { Tx } from './tx';
//declaring the constant with the node’s address
const RPC_URL = 'https://granadanet.api.tez.ie';

//declare the constant with the Everstake baker’s address
const ADDRESS = 'tz1STSXqr1JDhYPsYQvP8nLE27bUts1qe9dL';

// First command
//call the function Tx, send it the testnet link, and ask to activate the account
// new Tx(RPC_URL).activateAccount();

//Second command
//launching App, sending a link to the node, calling getBalance and sending it the address
// new App(RPC_URL).getBalance(ADDRESS);
