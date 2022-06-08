import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { CartCookie, CartCookieItem } from '../utilities/cookies.ts';
import { getProduct } from '../utilities/database/db.mjs';

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

export default function Product(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <section css={productSectionStyles}>
      <img
        src={props.product.imagePath}
        data-test-id="product-image"
        alt={`${props.product.manufacturer} ${props.product.model}`}
      />

      <div className="text">
        <h1>{props.product.model}</h1>
        <span>{props.product.manufacturer}</span>
        <hr />
        <br />
        {props.product.inStock ? (
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
        <span data-test-id="product-price">{props.product.price} €</span>
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
          disabled={!props.product.inStock}
          onClick={() => {
            new CartCookie().addCartItem(
              new CartCookieItem(props.product.id, quantity),
            );
          }}
        >
          add to cart
        </button>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const query = context.query;
  const product = await getProduct(query.id);

  return { props: { product } };
}
