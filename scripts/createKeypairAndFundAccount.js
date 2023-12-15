import axios from "axios";
import { generateKeyPair } from "@aeternity/aepp-sdk";
import dotenv from "dotenv";
dotenv.config();

export let keypair = null;

export const run = async () => {
  //keypair = generateKeyPair();

  keypair = {
    publicKey: "ak_JFMBtQG5yDcN2Y3qmN1MUeLZaAyiG9uKnYpWYsqFKnRnD7Na4",
    secretKey:
      "420940650e8cdbd0c90ba825c125fa5912f557d1ddd733d575e4702ceab5fe9bdcd61774bcb64950d13fc2a48305d3e9dfefb1b611b66dfb56d6718f2357b00f",
  };

  console.log("keypair : ", keypair);
  console.log(`Secret key: ${keypair.secretKey}`);
  console.log(`Public key: ${keypair.publicKey}`);

  //await axios.post(`https://faucet.aepps.com/account/${keypair.publicKey}`);
  const accountResponse = await axios.get(
    `https://testnet.aeternity.io/v3/accounts/${keypair.publicKey}`
  );

  console.log(`Balance: ${accountResponse.data.balance} ættos`);
};

// run();
