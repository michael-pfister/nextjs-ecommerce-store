import React from 'react';
import { getAllProducts } from '../utilities/database/db.mjs';
import { ProductsGrid } from './components/Products/Productsgrid';
import { SlideShow } from './components/Products/Slideshow';

export default function Products(props) {
  return (
    <div>
      <SlideShow />
      <ProductsGrid
        products={props.products.slice(0, 2)}
        heading="Featured"
        gridColumns={2}
      />
      <ProductsGrid
        products={props.products}
        heading="All Products"
        gridColumns={3}
      />
    </div>
  );
}

export async function getServerSideProps() {
  const products = await getAllProducts();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
