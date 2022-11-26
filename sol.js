const web3 = require("@solana/web3.js");

let connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'), 'confirmed');
const addy = '<INSERT_ADDRESS>'; 
const TOKEN_PROGRAM_ID = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';

console.log('connected to mainnet :)')
//console.log(web3);

async function getStuff() {
    let slot = await connection.getSlot();
    console.log('getting latest slot... which is', {slot});
    let blockTime = await connection.getBlockTime(slot);
    console.log('getting latest block.... which is: ',{blockTime});
}




async function getMyBal() {
    const accountInfo = await connection.getAccountInfo(
        new web3.PublicKey("7HCwHnjDJDjc5s8s9c43Rd1q6PFf9URKUXksT2ZM4Yxq")
        );
        let owner = accountInfo.owner.toBase58();
        let lamports = accountInfo.lamports / web3.LAMPORTS_PER_SOL;
    console.log('identifying account information is associ. w/:',{addy});
    console.log('it has balance of :',{lamports}, 'sol');
    console.log('the account is owned by the system program, identified by the public key:',{owner});
};

/*
//gets owned token accounts
async function getTokenAccounts() {
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
        new web3.PublicKey(addy),
        {
            programId: new web3.PublicKey(TOKEN_PROGRAM_ID)
        }
    );
    console.log('getting your token accounts:',{tokenAccounts});

}
*/
getStuff();
getMyBal();
//getTokenAccounts();
