const product = [
  {
    manufacturer: 'MSI',
    model: 'Radeon RX 6950 XT',
    price: 1383.67,
    in_stock: true,
    image_path: '/images/products/MSI Radeon RX 6950 XT.webp',
  },
  {
    manufacturer: 'ASUS TUF',
    model: 'GeForce RTX 3090Ti',
    price: 2273.29,
    in_stock: true,
    image_path: '/images/products/ASUS TUF GeForce RTX 3090Ti.webp',
  },
  {
    manufacturer: 'ASUS ROG STRIX',
    model: 'GeForce RTX 3090',
    price: 1875.86,
    in_stock: true,
    image_path: '/images/products/ASUS ROG STRIX GeForce RTX 3090.webp',
  },
  {
    manufacturer: 'Sapphire Nitro+',
    model: 'Radeon RX 6900 XT SE',
    price: 1099.12,
    in_stock: true,
    image_path: '/images/products/Sapphire Nitro+ Radeon RX 6900 XT SE.webp',
  },
  {
    manufacturer: 'Gigabyte',
    model: 'GeForce RTX 3080 Ti',
    price: 1532.49,
    in_stock: true,
    image_path: '/images/products/Gigabyte GeForce RTX 3080 Ti.webp',
  },
  {
    manufacturer: 'ASUS TUF',
    model: 'GeForce RTX 3080',
    price: 1012.49,
    in_stock: true,
    image_path: '/images/products/ASUS GeForce TUF RTX 3080.webp',
  },
  {
    manufacturer: 'Asrock',
    model: 'Radeon RX 6800 XT',
    price: 1108.24,
    in_stock: true,
    image_path: '/images/products/Asrock Radeon RX 6800 XT.webp',
  },
  {
    manufacturer: 'NVIDIA',
    model: 'Titan RTX',
    price: 6663.99,
    in_stock: false,
    image_path: '/images/products/NVIDIA Titan RTX.webp',
  },
];

exports.up = async function (sql) {
  // with `postgres` :: DB === sql``
  // console.log(await sql`select * from "product"`);

  await sql`CREATE TABLE "product" (
		id SERIAL PRIMARY KEY,
		manufacturer VARCHAR(255),
		model VARCHAR(255),
		price FLOAT(16),
		in_stock BOOLEAN,
		image_path VARCHAR(255))`;

  await sql`INSERT INTO "product" ${sql(
    product,
    'manufacturer',
    'model',
    'price',
    'in_stock',
    'image_path',
  )}`;
};

exports.down = async function (sql) {
  await sql`DROP TABLE "product"`;
};
