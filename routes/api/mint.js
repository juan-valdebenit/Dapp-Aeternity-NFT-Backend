import express from "express";
import dotenv from "dotenv";

import deployAndMintCollectionUniqueNFTs from "../../scripts/deployAndMintCollectionUniqueNFTs.js";
import { deployment } from "../../scripts/deployAndMintCollectionUniqueNFTs.js";
import { keypair } from "../../scripts/createKeypairAndFundAccount.js";

dotenv.config();

const router = express.Router();

// For checking if a string is blank, null or undefined
const isBlank = (str) => !str || /^\s*$/.test(str);
export let collectionUniqueMetadata = null;
router.post("/mint", async (req, res) => {
  try {
    const { hashKeys } = req.body;

    let immutableMetadataUrls = hashKeys.map((key) => `ipfs://${key}`);

    collectionUniqueMetadata = {
      name: "BoomStatsAnalysis",
      symbol: "BSA",
      immutable_metadata_urls: immutableMetadataUrls,
    };

    await deployAndMintCollectionUniqueNFTs();

    res.status(200).json({ contractAddress: deployment.address, deployerAddress : "123" });
  } catch (err) {
    console.log(err);
    res.status(503).json({ result: "server error" });
  }
});

export default router;
