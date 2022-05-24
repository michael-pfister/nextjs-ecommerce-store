import { products } from './simulated_data/database';

export default function Products(props) {
  return <div>products</div>;
}

export async function getServerSideProps(context) {
  return {
    props: { products }, // will be passed to the page component as props
  };
}
