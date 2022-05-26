import React from 'react';
import { ProductsGrid } from './components/products/productsgrid';
import { SlideShow } from './components/products/slideshow';
import { products } from './simulated_data/database';

export default function Products(props) {
  return (
  <div>
    <SlideShow />
    <ProductsGrid products={props.products.slice(0,3)} heading='Featured' gridColumns={3} />
    <ProductsGrid products={props.products} heading='All Products' gridColumns={5} />
  </div>);
}

export function getServerSideProps() {
  return {
    props: { products }, // will be passed to the page component as props
  };
}
