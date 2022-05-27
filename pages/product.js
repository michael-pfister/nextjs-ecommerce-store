import { css } from '@emotion/react';
import { useState } from 'react';
import { products } from './simulated_data/database';

const productSectionStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 113px);
  gap: 3em;

  img {
    width: 30em;
  }

  .text {
    width: 30em;
    height: 25em;
    display: inherit;
    flex-wrap: wrap;
    align-items: center;

    hr {
      background-color: black;
      width: 40%;
      margin: 1em 0;
    }

    span {
      width: 100%;
      text-align: left;
    }

    .quantityDiv {
      display: inherit;
      margin-right: 50px;
      align-items: center;
      gap: 5px;
      span {
        text-align: center;
        margin: 0 20px;
      }
      button {
        width: 10px;
        border-radius: 100%;
      }
    }

    .addToCart {
      margin-right: 15px;
      margin-left: auto;
    }
  }
`;

function getItem(query, products) {
  let searchTerms = query.id.split('-');
  const item = products.find((element) => {
    return (
      element.manufacturer === searchTerms[0] &&
      element.model === searchTerms[1]
    );
  });

  return item;
}

export default function Product(props) {
  const item = getItem(props.query, props.products);
  const [quantity, setQuantity] = useState(1);
  return (
    <section css={productSectionStyles}>
      <img
        src={item.image}
        data-test-id="product-image"
        alt={`${item.manufacturer} ${item.model}`}
      />

      <div className="text">
        <h1>{item.model}</h1>
        <span>{item.manufacturer}</span>
        <hr />
        <br />
        {item.inStock ? (
          <span style={{ color: 'Lime' }}>in Stock</span>
        ) : (
          <span style={{ color: 'Red' }}>out of Stock</span>
        )}
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <br />
        <span data-test-id="product-price">{item.price}</span>
        <div className="quantityDiv" data-test-id="product-quantity">
          <button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              quantity > 1 && setQuantity(quantity - 1);
            }}
          >
            -
          </button>
          <span>{quantity}</span>
        </div>
        <br />
        <button
          className="addToCart"
          data-test-id="product-add-to-cart"
          disabled={!item.inStock}
        >
          add to cart
        </button>
      </div>
    </section>
  );
}

export function getServerSideProps(context) {
  const query = context.query;

  return { props: { query, products } };
}
