let products = [
  {
    id: 1,
    name: "rice",
    price: 2.99,
    stock: 290,
  },
  {
    id: 2,
    name: "noodle",
    price: 1.59,
    stock: 102,
  },
  {
    id: 3,
    name: "meat",
    price: 15.89,
    stock: 60,
  },
  {
    id: 4,
    name: "bread",
    price: 6.99,
    stock: 40,
  },
  {
    id: 5,
    name: "egg",
    price: 0.5,
    stock: 600,
  },
];
for (let product of products) {
  console.log(`product: ${product.name}`);
}

for (let product of products) {
  console.log(`price: ${product.price}`);
}

for (let product of products) {
  total = product.price * product.stock;
  console.log(total);
}

let mostExpensive = products[0];
for (let product of products) {
  if (product.price > mostExpensive.price) {
    mostExpensive = product;
  }
}
console.log(mostExpensive);

let mostCheaper = products[0];
for (let product of products) {
  if (product.price < mostCheaper.price) {
    mostCheaper = product;
  }
}
console.log(mostCheaper);

let goodStock = [];
for (let product of products) {
  if (product.stock > 10) {
    goodStock.push(product);
  }
}
console.log(goodStock);

/**
 * Depois:

Liste todos os produtos.
Mostre apenas os nomes.
Mostre apenas os preços.
Calcule o valor total do estoque (preço × estoque de cada produto).
Descubra qual produto possui o maior preço.
Descubra qual possui o menor preço.
Crie um novo array contendo apenas os produtos com estoque maior que 10.
 */
