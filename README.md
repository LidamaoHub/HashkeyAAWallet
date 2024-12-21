# AA Wallet for Twitter on HashKey Chain – ERC-4337 Account Abstraction

This project implements an Account Abstraction (AA) solution on HashKey Chain based on ERC-4337. By leveraging AA, each Twitter user can easily generate a contract wallet without dealing with traditional private keys, and then issue MEME tokens or perform other on-chain operations through their Twitter account.

## Project Overview

In traditional Ethereum accounts (EOAs), users must manage their private keys directly, and a key leak can result in irreversible loss. Account Abstraction (AA) allows us to implement flexible features (e.g., social recovery, multi-signature, spending limits) at the contract level without modifying the underlying protocol.

This example specifically integrates with Twitter: once a Twitter account is bound to this system, it generates a predictable wallet address based on the user’s unique ID, which can then be deployed as a contract wallet. Through this wallet, the user can issue their own MEME tokens, transfer assets, and interact with other contracts on HashKey Chain—all without having to manage a traditional private key.
	•	Tailored for Twitter Users: Generate a salt from the user’s Twitter ID and predict or deploy the user’s contract wallet address.
	•	Versatile Functionality: The smart contract wallet allows you to issue MEME tokens, transfer funds, or mint NFTs; the user only needs to verify via Twitter and confirm minimal steps.
	•	Built for HashKey Chain: Benefit from the high scalability and cost efficiency of a Layer 2 solution, with HSK serving as a native token for gas and incentives.

## Key Features
	1.	Twitter ID Binding
	•	Users rely on Twitter for identity verification, avoiding the burden of managing a private key directly.
	•	Wallet addresses can be predicted even before deployment, allowing tokens to be received in advance or facilitating community interactions.
	2.	One-Click MEME Token Issuance
	•	After binding a Twitter account, a user can issue a custom MEME token via the AA wallet.
	•	Ideal for community building, fan engagement, or token airdrops.
	3.	Account Abstraction (ERC-4337)
	•	The contract-based account can send transactions just like an EOA, without protocol changes to Ethereum.
	•	Provides extensible security strategies, such as social recovery, multi-signature, rate limiting, and more.
	4.	High Scalability & Low Fees
	•	Deployed on HashKey Chain, which reduces costs and speeds up transactions under a Layer 2 environment.
	•	Integrated incentives with the HSK token, fostering more developer and user participation.

## Contract Architecture
	•	EntryPoint
The core contract for ERC-4337, responsible for verifying and executing UserOperation requests in an account abstraction context.
	•	SimpleAccount
The user’s contract wallet, where assets are stored and from which transactions and contract calls are made.
	•	SimpleAccountFactory
Provides createAccount(owner, salt) to deploy the SimpleAccount wallet on-chain and getAddress(owner, salt) for address prediction prior to deployment.
	•	Extendable Components
	•	MemeToken: A sample contract demonstrating how a user’s AA wallet can quickly issue and manage a MEME token.
	•	NFT Integration: If your application needs to mint or manage NFTs (e.g., for Twitter community airdrops or badges), you can integrate those features into this contract wallet as well.

## How to Use

1. Clone the Repository

git clone https://github.com/your-repo/aa-wallet-hashkey-chain-twitter.git
cd aa-wallet-hashkey-chain-twitter

2. Install Dependencies

npm install

or

yarn

3. Configure Environment Variables

Create a new .env file in the project root directory. An example configuration:

# HashKey Chain RPC endpoint
NETWORK_RPC_URL="https://rpc.hashkeychain.io"

# Private key for contract deployment
DEPLOYER_PRIVATE_KEY="0x123abc..."

# Contract addresses (after deployment, update accordingly)
ENTRY_POINT_ADDRESS="0x..."
FACTORY_ADDRESS="0x..."

# Salt used for binding Twitter ID to wallet address
SALT="YourCustomSalt"

4. Compile and Deploy

npx hardhat compile
npx hardhat run scripts/deploy.js --network hashkey

After deployment, you will see the addresses for EntryPoint, SimpleAccountFactory, etc. in your console output.

5. Twitter Wallet Workflow
	1.	Predicting the Address
	•	Your backend or frontend can call factory.getAddress(owner, salt) or use the /api/predict_address endpoint.
	•	Even if the contract wallet has not been deployed yet, users can know their address in advance for receiving tokens or inviting others.
	2.	Deploying the Contract Account
	•	Once the user completes any binding/verification step on Twitter, call factory.createAccount(owner, salt) or use the /api/deploy_account endpoint.
	•	The contract wallet is then fully deployed and ready to hold assets or interact with other smart contracts.
	3.	Issuing MEME Tokens
	•	With the contract wallet in place, the user can call functions to create a custom MEME token under their control.
	•	Perfect for airdrops, fan rewards, and community tokenomics.
	4.	Account Abstraction Transactions
	•	Utilize a Bundler or another relay service to send UserOperations to the EntryPoint, removing the need for a direct private key.
	•	Offers a “Gasless” approach or flexible payment methods if integrated with Paymaster.

Frequently Asked Questions
	•	Do I need to manage a private key?
Users simply verify or authenticate with Twitter. Signature checks can be handled by the contract logic or a secure backend, so users don’t need to store a raw private key.
	•	Why HashKey Chain?
As a Layer 2 solution, HashKey Chain provides higher throughput and lower latency, with HSK as the native token to cover gas. This environment is ideal for large-scale community use cases.
	•	How do I ensure the security between Twitter and the wallet?
You can add extra layers such as social recovery, multi-signature, or an allowlist at the contract level. This example focuses on the basic account binding and usage flow.

References
	•	ERC-4337 Specification
	•	Vitalik’s Post on AA Without Protocol Changes
	•	Bundler Reference Implementation
	•	HashKey Website
	•	ERC-4337/AA Discord Server

Conclusion

With this project, you can seamlessly integrate AA Wallet functionality on HashKey Chain, allowing every Twitter account to quickly spin up a contract wallet for MEME token issuance, transfers, and more. We hope developers build upon this solution and bring effortless, secure Web3 social experiences to an even broader audience!