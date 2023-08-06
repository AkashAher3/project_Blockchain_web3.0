# Peer-to-Peer Transaction using Blockchain



## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

The Peer-to-Peer Transaction using Blockchain project is a decentralized application (DApp) that allows users to conduct secure and transparent transactions directly with each other without the need for intermediaries. The project leverages the power of blockchain technology to ensure trust, immutability, and security in the transaction process.

In traditional financial systems, transactions often involve centralized authorities like banks, which can slow down the process, add fees, and introduce vulnerabilities to security. By using blockchain technology, this project aims to create a decentralized, trustless, and efficient environment for peer-to-peer transactions.

## Features

- Create a user account with a digital wallet.
- Send and receive digital assets securely and directly between users.
- View transaction history and account balance.
- Smart contract implementation for handling transactions securely.
- Tamper-proof and transparent transaction records on the blockchain.
- Real-time transaction notifications.

## Technologies Used

- **React**: The project's frontend is built using React, providing a dynamic and responsive user interface for smooth user interactions.

- **JavaScript**: JavaScript is used for implementing the business logic and user interactions on the frontend.

- **Solidity**: Solidity is the programming language of choice for writing smart contracts that run on the blockchain.

- **Ethereum Blockchain**: The project utilizes the Ethereum blockchain to store transaction data and execute smart contracts.

- **Web3.js**: Web3.js is used to interact with the Ethereum blockchain from the frontend, enabling seamless communication with smart contracts.

- **Metamask**: Metamask browser extension enables users to interact securely with the Ethereum blockchain through their browsers.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/AkashAher3/peer-to-peer-transaction.git`
2. Change directory: `cd peer-to-peer-transaction`
3. Install dependencies: `npm install`

## Installation

To set up the development environment, you'll need to install the following tools:

1. [Node.js](https://nodejs.org): Make sure to install Node.js, which includes npm (Node Package Manager).
2. [Ganache](https://www.trufflesuite.com/ganache): Download and install Ganache to run a local blockchain for development.
3. [Metamask](https://metamask.io/): Install the Metamask browser extension to interact with the DApp.

## Usage

1. Run Ganache and set up a local blockchain network.
2. Import a few test accounts into Metamask using the private keys provided by Ganache.
3. Connect Metamask to the local Ganache network.
4. Deploy the smart contracts to the local network using Truffle: `truffle migrate --reset`
5. Start the development server: `npm start`
6. Access the application in your web browser at `http://localhost:3000`.
