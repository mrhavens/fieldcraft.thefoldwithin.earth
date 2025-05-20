// generate-wallet.js
const { ethers } = require("ethers");
const fs = require("fs");

const wallet = ethers.Wallet.createRandom();

console.log("🪪 Wallet Address:", wallet.address);
console.log("🔑 Private Key:", wallet.privateKey);
console.log("📝 Mnemonic:", wallet.mnemonic.phrase);

// Optionally write to a .env-compatible file
fs.writeFileSync(".env.wallet", `WALLET_ADDRESS=${wallet.address}
WALLET_PRIVATE_KEY=${wallet.privateKey}
WALLET_MNEMONIC="${wallet.mnemonic.phrase}"
`);

console.log("✅ Wallet written to .env.wallet (DO NOT COMMIT THIS FILE)");
