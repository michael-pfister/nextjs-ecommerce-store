import { css } from '@emotion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProductContainer from '../components/Cart/ProductContainer';
import { CartCookie } from '../utilities/cookies.ts';
import { getAllProducts } from '../utilities/database/db.mjs';

const cartSectionStyles = css`
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .shoppingCartDiv {
    width: 800px;

    ul {
      display: flex;
      justify-content: right;
      list-style: none;
      gap: 100px;
    }

    button {
      margin-left: auto;
      width: 200px;
    }
  }

  .cartTotalDiv {
    width: 400px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 0;

      ul {
        list-style: none;

        li {
          display: flex;
          justify-content: right;
          align-items: center;
          margin: 10px 0;
        }
      }
    }

    button {
      width: 100%;
      margin: 50px 0;
    }
  }
`;

export function Total({ products, cartCookie }) {
  let amount = 0;

  for (const product of products) {
    for (const cartCookieItem of cartCookie) {
      if (cartCookieItem.productId === product.id) {
        amount += cartCookieItem.productQuantity * product.price;
      }
    }
  }

  return <span>{Math.round(amount * 100) / 100} €</span>;
}

export default function Cart(props) {
  const [shippingInput, setShippingInput] = useState([true, false, false]);
  const [cartCookie, setCartCookie] = useState({ cookie: [] });

  useEffect(() => {
    setCartCookie(new CartCookie());
  }, []);

  return (
    <section css={cartSectionStyles}>
      <div className="shoppingCartDiv">
        <h1>Shopping cart</h1>
        <hr />
        <ul>
          <li>Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Subtotal</li>
        </ul>
        <hr />
        <div>
          {cartCookie.cookie.map((cartCookieItem) => {
            return (
              <ProductContainer
                key={`cart_item-${cartCookieItem.productId}`}
                productQuantity={cartCookieItem.productQuantity}
                product={props.products.find((product) => {
                  return product.id === cartCookieItem.productId;
                })}
                setCartCookie={setCartCookie}
                setCartItemCount={props.setCartItemCount}
              />
            );
          })}
        </div>
        <button
          onClick={() => {
            setCartCookie(new CartCookie());
          }}
        >
          refresh cart
        </button>
      </div>
      <div className="cartTotalDiv">
        <h1>Cart Totals</h1>
        <hr />
        <div>
          <span>Free Shipping</span>
          <ul>
            <li>
              Österreichische Post
              <input
                type="radio"
                checked={shippingInput[0]}
                onChange={() => {
                  setShippingInput([true, false, false]);
                }}
              />
            </li>
            <li>
              DHL
              <input
                type="radio"
                checked={shippingInput[1]}
                onChange={() => {
                  setShippingInput([false, true, false]);
                }}
              />
            </li>
            <li>
              Hermes
              <input
                type="radio"
                checked={shippingInput[2]}
                onChange={() => {
                  setShippingInput([false, false, true]);
                }}
              />
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <span>Total</span>
          <Total products={props.products} cartCookie={cartCookie.cookie} />
        </div>

        <Link href="/checkout">
          <button>proceed to checkout</button>
        </Link>
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  const products = await getAllProducts();

  return { props: { products: products } };
}
