/* https://www.gpumag.com/gpu-hierarchy/ */

// not JSON serializable
/* class Product {
  constructor(manufacturer, model, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.price = price;
    this.inStock = true;
  }
} */

export const products = [
  {
    id: 1,
    manufacturer: 'MSI',
    model: 'Radeon RX 6950 XT',
    price: 1383.67,
    inStock: true,
    image: '/images/products/MSI Radeon RX 6950 XT.webp',
  },
  {
    id: 2,
    manufacturer: 'ASUS TUF',
    model: 'GeForce RTX 3090Ti',
    price: 2273.29,
    inStock: true,
    image: '/images/products/ASUS TUF GeForce RTX 3090Ti.webp',
  },
  {
    id: 3,
    manufacturer: 'ASUS ROG STRIX',
    model: 'GeForce RTX 3090',
    price: 1875.86,
    inStock: true,
    image: '/images/products/ASUS ROG STRIX GeForce RTX 3090.webp',
  },
  {
    id: 4,
    manufacturer: 'Sapphire Nitro+',
    model: 'Radeon RX 6900 XT SE',
    price: 1099.12,
    inStock: true,
    image: '/images/products/Sapphire Nitro+ Radeon RX 6900 XT SE.webp',
  },
  {
    id: 5,
    manufacturer: 'Gigabyte',
    model: 'GeForce RTX 3080 Ti',
    price: 1532.49,
    inStock: true,
    image: '/images/products/Gigabyte GeForce RTX 3080 Ti.webp',
  },
  {
    id: 6,
    manufacturer: 'ASUS TUF',
    model: 'GeForce RTX 3080',
    price: 1012.49,
    inStock: true,
    image: '/images/products/ASUS GeForce TUF RTX 3080.webp',
  },
  {
    id: 7,
    manufacturer: 'Asrock',
    model: 'Radeon RX 6800 XT',
    price: 1108.24,
    inStock: true,
    image: '/images/products/Asrock Radeon RX 6800 XT.webp',
  },
  {
    id: 8,
    manufacturer: 'NVIDIA',
    model: 'Titan RTX',
    price: 6663.99,
    inStock: false,
    image: '/images/products/NVIDIA Titan RTX.webp',
  },
];
