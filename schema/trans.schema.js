import mongoose from "mongoose";

/**
  * @typedef {Object} Transaction
  * @property {Number} blockNumber
  * @property {String} blockHash
  * @property {String} timeStamp 
  * @property {String} hash
  * @property {Number} nonce
  * @property {Number} transactionIndex
  * @property {String} from
  * @property {String} to
  * @property {String} value
  * @property {String} gas
  * @property {String} gasPrice
  * @property {String} input 
  * @property {String} cumulativeGasUsed
  * @property {String} gasUsed
  * @property {String} confirmations
  * */

/**
* @type {mongoose.Schema<Transaction>}
* */
const transactionSchema = new mongoose.Schema({
  blockNumber: {
    type: Number,
    required: true,
  },
  blockHash: {
    type: String,
    required: true,
    trim: true
  },
  timeStamp: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  nonce: {
    type: Number,
    required: true,
  },
  transactionIndex: {
    type: Number,
    required: true,
  },
  from: {
    type: String,
    required: true,
    trim: true
  },
  to: {
    type: String,
    required: true,
    trim: true
  },
  value: {
    type: String,
    required: true,
  },
  gas: {
    type: String,
    required: true,
  },
  gasPrice: {
    type: String,
    required: true,
  },
  gasUsed: {
    type: String,
    required: true,
  },
  confirmations: {
    type: String,
    required: true,
  },
  cumulativeGasUsed: {
    type: String,
    required: true
  },
  input: {
    type: String,
    required: true,
  },

})

/**
  * @typedef {Object} User
  * @property {String} address - The Ethereum address of the user.
  * @property {Transaction[]} transactions - Array of transactions for this user.
  * @property {Number} ethPrice - The current Ethereum price. 
  * */

/**
  * @type {mongoose.Schema<User>}
  * */
const userSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  transactions: {
    type: [transactionSchema],
    default: []
  },
  ethPrice: {
    type: Number,
    required: true,
    default: 0,
  }

})

/**
  * @type {mongoose.Model<User>}
  * */
export const UserModel = mongoose.model('Transaction', userSchema, 'transactions');

/**
* @typedef {Object} Response
* @property {Number} status - The status of Response.
* @property {String} message
* @property {String} details
* */


/**
* @typedef {Object} RequestDto
* @property {String} address
* */

/**
  * @typedef {Object} TotalExpense - Total expense of user.
  * @property {Number} transactionIndex
  * @property {Number} totalExpense
  * */
