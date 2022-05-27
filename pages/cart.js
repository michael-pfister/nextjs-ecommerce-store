import { css } from '@emotion/react';
import { useState } from 'react';

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

export default function Cart() {
  const [shippingInput, setShippingInput] = useState([true, false, false]);

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
        <button>refresh cart</button>
      </div>
      <div className="cartTotalDiv">
        <h1>Cart Totals</h1>
        <hr />
        <div>
          <span>Subtotal</span>
          <span>€€€</span>
        </div>
        <hr />
        <div>
          <span>Shipping</span>
          <ul>
            <li>
              Österreichische Post
              <input
                type="radio"
                checked={shippingInput[0]}
                onClick={() => {
                  setShippingInput([true, false, false]);
                }}
              />
            </li>
            <li>
              DHL
              <input
                type="radio"
                checked={shippingInput[1]}
                onClick={() => {
                  setShippingInput([false, true, false]);
                }}
              />
            </li>
            <li>
              Hermes
              <input
                type="radio"
                checked={shippingInput[2]}
                onClick={() => {
                  setShippingInput([false, false, true]);
                }}
              />
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <span>Total</span>
          <span>€€€</span>
        </div>
        <button>proceed to checkout</button>
      </div>
    </section>
  );
}
