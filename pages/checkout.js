import { css } from '@emotion/react';
import { useState } from 'react';
import { getAllProducts } from '../utilities/database/db.mjs';
import CartOverview from './components/Checkout/CartOverview';
import Delivery from './components/Checkout/Delivery';
import Payment from './components/Checkout/Payment';

const checkoutStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .header {
    display: flex;
    width: 100%;
    justify-content: space-around;
    .heading {
      display: inherit;
      align-items: center;
      justify-content: center;
      margin: 20px 0;

      img {
        margin: 0 10px;
      }

      h2,
      p {
        margin: 0;
      }
    }

    .navigation {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;

      div {
        display: inherit;
        gap: 10px;
      }

      img {
        width: 30px;
      }

      div > span:nth-of-type(1) {
        width: 20px;
        text-align: center;
        background-color: black;
        border-radius: 100%;
        color: white;
      }
    }
  }

  .orderOverview {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid black;
    padding: 20px;
    width: 300px;

    & > * {
      width: 100%;
    }
  }
`;

export default function Checkout(props) {
  const [isDelivery, setIsDelivery] = useState(true);
  const [isFilledOut, setIsFilledOut] = useState(false);

  return (
    <div css={checkoutStyles}>
      <div className="header">
        <div className="heading">
          <img
            src="/images/checkout/OOjs_UI_icon_lock.svg"
            alt="padlock"
            height="30px"
          />
          <div>
            <h2>Secure Checkout</h2>
            <p>powered by Swift</p>
          </div>
        </div>
        <div className="navigation">
          <div
            css={() =>
              isDelivery &&
              `
    font-size: x-large;
    `
            }
          >
            <span style={isDelivery ? { width: 30 } : {}}>1</span>
            <span>Delivery</span>
          </div>
          <img src="/images/checkout/right-arrow.svg" alt="arrow" />
          <div
            css={() =>
              !isDelivery &&
              `
    font-size: x-large;`
            }
          >
            <span style={isDelivery ? {} : { width: 30 }}>2</span>
            <span>Payment</span>
          </div>
        </div>
      </div>
      {isDelivery ? (
        <Delivery setIsFilledOut={setIsFilledOut} />
      ) : (
        <Payment setIsFilledOut={setIsFilledOut} />
      )}
      <div className="orderOverview">
        <CartOverview products={props.products} />
        <button
          onClick={() => {
            if (!isDelivery) {
              document.cookie = 'CartCookie=[]';
              window.location.href = '/thank_you';
            } else {
              setIsDelivery(!isDelivery);
            }
          }}
          disabled={!isFilledOut}
        >
          {isDelivery ? 'continue' : 'complete order'}
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const products = await getAllProducts();

  return { props: { products: products } };
}
