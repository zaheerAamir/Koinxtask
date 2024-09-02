import { addNormalTransRepo, updateEthPriceRepo } from "../repositories/user.repo.js";

/**
  * @param {Array} body 
  * @param {String} address 
  **/
export async function addNormalTransService(body, address) {

  try {
    /**
      * @type {import("../schema/trans.schema").Transaction[]}
      **/
    const transactions = [];

    body.forEach(res => {

      /**
        * @type {import("../schema/trans.schema").Transaction}
        **/
      const transaction = {
        blockNumber: Number.parseInt(res.blockNumber),
        blockHash: res.blockHash,
        timeStamp: res.timeStamp,
        hash: res.hash,
        nonce: Number.parseInt(res.nonce),
        transactionIndex: Number.parseInt(res.transactionIndex),
        from: res.from,
        to: res.to,
        value: res.value,
        gas: res.gas,
        gasPrice: res.gasPrice,
        input: res.input,
        cumulativeGasUsed: res.cumulativeGasUsed,
        gasUsed: res.gasUsed,
        confirmations: res.confirmations,
      };

      transactions.push(transaction);
    })

    /**
      * @type {import("../schema/trans.schema").User}
      * */
    const user = {
      address: address,
      transactions: transactions
    };

    addNormalTransRepo(user);

  } catch (error) {
    throw new Error(error);
  }

}

/**
  * @param {Object} body 
  * @param {String} address 
  * */
export async function updateEthPriceService(body, address) {



  try {
    updateEthPriceRepo(body.ethereum.inr, address);

  } catch (error) {
    throw new Error(error)
  }

}
