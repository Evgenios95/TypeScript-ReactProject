import * as fs from "fs/promises";
const USERS_FILE = "./data/Users.json";
const PRODUCTS_FILE = "./data/Products.json";
const BUCKET_FILE = "./data/bucket.json";

export async function getAll() {
  try {
    let usersTxt = await fs.readFile(USERS_FILE);
    let users = JSON.parse(usersTxt);
    return users;
  } catch (err) {
    if (err.code === "ENOENT") {
      // file does not exits
      await save([]); // create a new file with empty array
      return []; // return empty array
    } // cannot handle this exception, so rethrow
    else throw err;
  }
}

export async function getAllBuckets() {
  try {
    let bucketTxt = await fs.readFile(BUCKET_FILE);
    let bucket = JSON.parse(bucketTxt);
    return bucket;
  } catch (err) {
    if (err.code === "ENOENT") {
      // file does not exits
      await save([]); // create a new file with empty array
      return []; // return empty array
    } // cannot handle this exception, so rethrow
    else throw err;
  }
}

export async function findUser(id) {
  let users = await getAll();

  // console.log(users);
  if (users) {
    let specificUser = users.find((user) => user.UserId === id);
    // console.log(specificUser);
    return specificUser;
  } else {
    throw new Error(
      `Unfortunately, the user with the id of ${id} doesn't exist.`
    );
  }
}

/**
 *
 * @param {*} id
 */
export async function addCart(id) {
  let users = await getAll();
  if (users) {
    const filteredUsers = users.filter((user) => user.UserId == id);
    let cart = { products: [], totalPrice: 0 };
    let filteredUser = filteredUsers[0];
    filteredUser["cart"] = cart;
    //if the array includes the user
    if (users.includes(filteredUser)) {
      const usersJson = JSON.stringify(users);
      await fs.writeFile(USERS_FILE, usersJson);
    } 
    console.log(filteredUser);
  }
}

export async function getCartUser(id) {
  let users = await getAll();
  if (users) {
    const filteredUsers = users.filter((user) => user.UserId == id);
    const userCart = filteredUsers[0].cart;
    if (!userCart) {
      throw new Error("This user has no cart");
    }
    return userCart;
  }
}

export async function getByID(productId) {
  let productArray = await getAllProds();
  let index = findProduct(productArray, productId);
  console.log(index);
  if (index === -1)
    throw new Error(`product with ID:${productId} doesn't exist 😫!`);
  else return productArray[index];
}

export async function getAllProds() {
  try {
    let productsTxt = await fs.readFile(PRODUCTS_FILE);
    let products = JSON.parse(productsTxt);
    return products;
  } catch (err) {
    if (err.code === "ENOENT") {
      // file does not exits
      return []; // return empty array
    }
    // cannot handle this exception, so rethrow
    else throw err;
  }
}

function findProduct(productArray, Id) {
  return productArray.findIndex((currproduct) => currproduct.productId === Id);
}

export async function getProductByID(id) {
  let productArray = await getAllProds();
  let index = await findProduct(productArray, id);
  if (index === -1)
    throw new Error(`Product with ID:${productId} doesn't exist`);
  else return productArray[index];
}

export async function getProductInfoByUserIdModel(userId) {
  let cartInfo = await getCartUser(userId);
  let newProduct = [];
  let newProductArray;
  await cartInfo.products.map(async (productID) => {
    newProductArray = await getProductByID(productID);
    newProduct.push(newProductArray);
    console.log(newProduct);
  });
  return newProduct;
}

// export async function addProductToCart(userId, productId) {
//   let users = await getAll();
//   if (users) {
//     //retrieve product + filtered user by ids
//     let index = await getByID(productId);
//     const filteredUsers = users.filter((user) => user.UserId === userId);

    
//     if (filteredUsers[0] === undefined) {
//       throw new Error(`This user doesn't exist currently 😒!`)
//     }

//     //individual product values
//     let productIdFinder = index.productId;
//     let productPrice = index.price;

//     //push the product id to my product array inside the users cart.
//     let userCart = filteredUsers[0].cart.products;
//     userCart.push(productIdFinder);

//     //why can't it be changed if I assign it to a variable?
//     filteredUsers[0].cart.totalPrice =
//       filteredUsers[0].cart.totalPrice + +productPrice;

//     let userString = JSON.stringify(users);
//     fs.writeFile(USERS_FILE, userString);
//   }
// }

export async function addProductToBucket(userId, productId, pName, pPrice, pImage, pQuantity) {
  let allBucket = await getAllBuckets();
  let newBucket = [];
  let sign = true;

  allBucket.map((bucket, index) => {
    if(bucket.UserId === userId && bucket.productId === productId) {
      allBucket[index].quantity += 1;
      sign = false;
    }
  });
  
  if(sign === false) {
    let bucketString1 = JSON.stringify(allBucket);
    fs.writeFile(BUCKET_FILE, bucketString1);
  } else if (userId >= 0 && productId && sign) {
    newBucket = {
      UserId: userId,
      productId: productId,
      productName: pName,
      price: pPrice,
      productImage: pImage,
      quantity: pQuantity
    };
    allBucket.push(newBucket);
    let bucketString = JSON.stringify(allBucket);
    fs.writeFile(BUCKET_FILE, bucketString);
  }
}

// export async function deleteProductFromBasket(userId, productCartId) {
//   let users = await getAll();
//   let indexP = await getByID(productCartId);

//   const filteredUsers = users.filter((user) => user.UserId === userId);
//   let userProducts = filteredUsers[0].cart.products;
//   // console.log(userProducts);
//   let index = userProducts.findIndex((product) => product === productCartId);
//   console.log(index);

//   if (index !== -1) {
//     let productPrice = indexP.price;
//     // console.log(productPrice);
//     userProducts.splice(index, 1);
//     filteredUsers[0].cart.totalPrice =
//       filteredUsers[0].cart.totalPrice - productPrice;
//   } else {
//     throw new Error(`Can't remove the item with the id: ${productCartId}, as it's not in the cart 😀!`);
//   }
//   // console.log(userProducts);
//   let userString = JSON.stringify(users);
//   fs.writeFile(USERS_FILE, userString);
// }

export async function deleteProductFromBasket(userId, productId, quantity) {
  let buckets = await getAllBuckets();
  const filteredBucket = buckets.filter((bucket) => bucket.UserId !== userId || bucket.productId !== productId);
  let reBucket = [];

  if(quantity > 1) {
    buckets.map((bucket, index) => {
      if(bucket.UserId === userId && bucket.productId === productId) {
        buckets[index].quantity -= 1;
        console.log(buckets);
      }
    }); 
    let bucketString1 = JSON.stringify(buckets);
    fs.writeFile(BUCKET_FILE, bucketString1);
  } else {
    
    let bucketString = JSON.stringify(filteredBucket);
    fs.writeFile(BUCKET_FILE, bucketString);
  }

  
}

export async function addNewUser(name, email) {
  let allUser = await getAll();
  let newUserId = allUser.length + 1;
  let newUser = [];
  
  newUser = {
    UserId: newUserId,
    name: name,
    email: email,
  };
  allUser.push(newUser);
  let userString = JSON.stringify(allUser);
  fs.writeFile(USERS_FILE, userString);
}