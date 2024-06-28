# ERC20 Token Holdings Indexer

This repository indexes users' historical data for their holdings of a specific ERC20 token using the Graph Protocol.

## Installation

To install the necessary dependencies, you can use either `yarn` or `npm`:

```sh
yarn install
# or
npm install
```

## Configuration
1. Update the network.json file

```json
{
  "mainnet": {   // your network
    "DFYNToken": { // your contract name
      "address": "0x9695e0114e12c0d3a3636fab5a18e6b737529023",   // your contract address
      "startBlock": 12386317  // your contract start block
    }
  }
}
```

2. Update the subgraph.yaml file
Ensure that the subgraph.yaml file is updated accordingly with your contract details.

## Alternative Setup
Alternatively, you can simplify the setup process by installing the Graph CLI and initializing your project:

1. Install Graph CLI:
```sh
yarn global add @graphprotocol/graph-cli
# or
npm install -g @graphprotocol/graph-cli
```

2. Initialize the Graph project:
```sh
graph init
```

3. Follow the prompts to provide your contract address, network, and other details. This step can replace steps 1 and 2 above.

4. Copy the necessary files from the repository:
    - src/mapping.ts
    - schema.graphql
    - subgraph.yaml (update according to your contract address)
