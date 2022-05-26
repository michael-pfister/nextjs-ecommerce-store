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
    manufacturer: 'MSI',
    model: 'Radeon RX 6950 XT',
    price: '1.383,67€',
    inStock: true,
    image: '/images/products/MSI Radeon RX 6950 XT.webp',
  },
  {
    manufacturer: 'ASUS TUF',
    model: 'GeForce RTX 3090Ti',
    price: '2.273,29€',
    inStock: true,
    image: '/images/products/ASUS TUF GeForce RTX 3090Ti.webp',
  },
  {
    manufacturer: 'ASUS ROG STRIX',
    model: 'GeForce RTX 3090',
    price: '1.875,86€',
    inStock: true,
    image: '/images/products/ASUS ROG STRIX GeForce RTX 3090.webp',
  },
  {
    manufacturer: 'Sapphire Nitro+',
    model: 'Radeon RX 6900 XT SE',
    price: '1.099,12€',
    inStock: true,
    image: '/images/products/Sapphire Nitro+ Radeon RX 6900 XT SE.webp',
  },
  {
    manufacturer: 'Gigabyte',
    model: 'GeForce RTX 3080 Ti',
    price: '1.532,49€',
    inStock: true,
    image: '/images/products/Gigabyte GeForce RTX 3080 Ti.webp',
  },
  {
    manufacturer: 'ASUS TUF',
    model: 'GeForce RTX 3080',
    price: '1.012,49€',
    inStock: true,
    image: '/images/products/ASUS GeForce TUF RTX 3080.webp',
  },
  {
    manufacturer: 'Asrock',
    model: 'Radeon RX 6800 XT',
    price: '1.108,24€',
    inStock: true,
    image: '/images/products/Asrock Radeon RX 6800 XT.webp',
  },
  {
    manufacturer: 'NVIDIA',
    model: 'Titan RTX',
    price: '6.664,00€',
    inStock: false,
    image: '/images/products/NVIDIA Titan RTX.webp',
  },
];
