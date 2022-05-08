const products = [
  { id: 1, name: "Notebook", price: 9575.25 },
  { id: 2, name: "Headphones", price: 655.95 },
  { id: 3, name: "Microphone", price: 568.7 },
  { id: 4, name: "Keyboard", price: 215.12 },
];

function getProducts() {
  setTimeout(() => {
    products.forEach((product) => {
      console.log(product);
    });
  }, 1000);
}

function createProduct(product, callback) {
  const newProduct = {
    ...product,
  };
  getMaxProductId(function (value) {
    newProduct.id = value + 1;
    setTimeout(() => {
      products.push(newProduct);
      console.log(
        `${newProduct.id} - ${newProduct.name} product is successfully added.`
      );
      callback();
    }, 2000);
  });
}

function getMaxProductId(callback) {
  setTimeout(() => {
    const reducer = function (accumulator, current) {
      return accumulator.id > current.id ? accumulator : current;
    };
    callback(products.reduce(reducer, 0).id);
  }, 3000);
}

const newProduct = { id: undefined, name: "Mouse", price: 199.97 };
createProduct(newProduct, getProducts);
