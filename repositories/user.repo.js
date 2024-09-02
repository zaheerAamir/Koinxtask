import { UserModel } from "../schema/trans.schema.js";


/**
  * @param {import("../schema/trans.schema").User} user 
  * */
export async function addNormalTransRepo(user) {

  try {

    const newUser = new UserModel(user);
    newUser.save()

  } catch (error) {
    throw new Error(error);
  }

}

/**
  * @param {Number} price 
  * @param {String} address 
  * */
export async function updateEthPriceRepo(price, address) {

  try {
    const res = await UserModel.updateOne(
      { address: address },
      { $set: { ethPrice: price } }
    )

    console.log(res)

  } catch (error) {
    throw new Error(error)
  }

}

/**
  * @param {String} address 
  * */
export async function getTotalExpenseRepo(address) {

  try {
    /**
      * @type {import("../schema/trans.schema.js").User}
      * */
    const res = await UserModel.findOne(
      { address: address },
    )

    return res;

  } catch (error) {
    throw new Error(error)
  }

}
