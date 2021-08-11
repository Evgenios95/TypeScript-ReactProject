import { getAll, addCart, getCartUser, findUser, addProductToBucket, deleteProductFromBasket, getProductInfoByUserIdModel, getAllBuckets, addNewUser } from "./Users.model.js";

export async function getAllUsers(req, res) {
  try {
    let allUsers = await getAll();
    res.json({ allUsers });
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

export async function getProductInfoByUserId(req, res) {
  const userId = parseInt(req.params.id);
  try {
    let allProductInfo =  await getProductInfoByUserIdModel(userId);
    // console.log(allProductInfo);
    res.json(allProductInfo);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function createUserCart(req, res) {
  const user = parseInt(req.params.id);
  try {
    await addCart(user);
    res.json({ success: "created" });
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

export async function getCartByUserId(req, res) {
  const user = parseInt(req.params.id);
  try {
    const cart = await getCartUser(user);
    console.log(cart);
    res.json(cart);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getUserById(req, res) {
  const userId = parseInt(req.params.id);
  try {
    const user = await findUser(userId);
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// export async function addP(req,res){
//   try{
//     const userId =parseInt(req.params.id);
//     const productId = parseInt(req.params.pid);
//     await addProductToCart(userId, productId);
//     const user = await findUser(userId);
//     res.json({user});
//   } catch(error){
//     res.status(400).send(error.message);
//   }
// }

export async function addP(req,res){
  try{
    const userId = parseInt(req.params.id);
    const productId = parseInt(req.params.pid);
    const pName = req.params.pName;
    const pPrice = req.params.pPrice;
    const pImage = req.params.pImage;
    const pQuantity = 1;
    await addProductToBucket(userId, productId, pName, pPrice, pImage, pQuantity);
    res.json({addBucket: "added successfully!"})
  } catch(error){
    res.status(400).send(error.message);
  }
}

export async function getAllBucketsByUserId(req, res) {
  try{
    let userId = req.params.id;
    let allBuckets = await getAllBuckets();
    let filteredBuckets = allBuckets.filter(  
      (bucket) => bucket.UserId == userId
    );
    res.json({ filteredBuckets });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// export async function cartDelete(req, res){
//   try {
//     const userId =parseInt(req.params.id);
//     const productId = parseInt(req.params.pid);
//     await deleteProductFromBasket(userId, productId);
//     res.json({Product: "deleted successfully!"})
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// }

export async function cartDelete(req, res){
  try {
    const userId = parseInt(req.params.id);
    const productId = parseInt(req.params.pid);
    const quantity = parseInt(req.params.quantity);
    await deleteProductFromBasket(userId, productId, quantity);
    res.json({removedBucket: "deleted successfully!"});
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function addUser(req, res) {
  try {
    const userName = req.params.userName;
    const userEmail = req.params.userEmail;
    await addNewUser(userName, userEmail);
    res.json({addNewUser: "success"});
  } catch (error) {
    res.status(400).send(error.message);
  }
}