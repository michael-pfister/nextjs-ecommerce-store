/* https://www.gpumag.com/gpu-hierarchy/ */
class Product {
  constructor(manufacturer, model, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.price = price;
    this.inStock = true;
  }
}

export const products = [
  new Product('AMD', 'RX 6950 XT', '1.308,36€'),
  new Product('NVIDIA', 'RTX 3090 Ti', '1.914,96€'),
  new Product('NVIDIA', 'RTX 3090', '1.914,96€'),
  new Product('AMD', 'RX 6900 XT', '1.108,24€'),
  new Product('NVIDIA', 'RTX 3080 Ti', '1.469,06€'),
  new Product('NVIDIA', 'RTX 3080', '1.040,64€'),
  new Product('AMD', 'RX 6800 XT', '1.108,24€'),
  new Product('NVIDIA', 'Titan RTX', '3.792,00€'),
];
