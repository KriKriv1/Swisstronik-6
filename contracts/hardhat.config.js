require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "b20c6d011de9dd01cad3c5a3329f63135358bbae0f20e00596e8a2c29c0684ef";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
