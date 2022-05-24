import { SlideShow } from './components/products/slideshow';
import { products } from './simulated_data/database';

export default function Products(props) {
  return (
  <div>
    <SlideShow />
  </div>);
}

export async function getServerSideProps(context) {
  return {
    props: { products }, // will be passed to the page component as props
  };
}
