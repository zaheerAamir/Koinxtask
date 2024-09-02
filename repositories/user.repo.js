import { UserModel } from "../schema/trans.schema.js";


/**
  * @param {import("../schema/trans.schema").User} user 
  * */
export async function getNormalTransRepo(user) {

  try {

    const newUser = new UserModel(user);
    newUser.save()

  } catch (error) {
    throw new Error(error);
  }

}

/**
  * @param {Number} price 
  * */
export async function getEthPriceRepo(price) {

  console.log(price);
}
