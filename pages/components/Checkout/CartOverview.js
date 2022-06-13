import { css } from '@emotion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CartCookie } from '../../../utilities/cookies';
import { Total } from '../../cart';

const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: black;
  }
`;

const cartOverviewItemStyles = css`
  border-top: 1px solid black;
  padding: 5px 0;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    div {
      display: inline;

      h4 {
        margin: 0;
      }

      p {
        margin: 0;
      }
    }
  }

  p {
    margin: 10px 0 0 0;
    text-align: right;
  }
`;

const totalStyles = css`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  h3 {
    margin: 0;
  }

  span {
    display: flex;
    align-items: center;
  }
`;

export default function CartOverview(props) {
  const [cartCookie, setCartCookie] = useState([]);
  useEffect(() => {
    setCartCookie(new CartCookie().cookie);
  }, []);

  let cartItem;

  return (
    <div>
      <header css={headerStyles}>
        <h3>🛒 Cart Summary</h3>(
        <Link className="Link" href="/cart">
          edit
        </Link>
        )
      </header>
      {cartCookie.map((cartCookieItem) => {
        cartItem = props.products.find((product) => {
          return cartCookieItem.productId === product.id;
        });

        return (
          <div
            css={cartOverviewItemStyles}
            key={`cart-overview-item-${cartCookieItem.productId}`}
          >
            <div>
              <span>{cartCookieItem.productQuantity}x</span>
              <div>
                <h4>{cartItem.manufacturer}</h4>
                <p>{cartItem.model}</p>
              </div>
            </div>
            <p className="price">
              {Math.round(
                cartItem.price * cartCookieItem.productQuantity * 100,
              ) / 100}{' '}
              €
            </p>
          </div>
        );
      })}
      <div css={totalStyles}>
        <h3>Total</h3>
        <Total products={props.products} cartCookie={cartCookie} />
      </div>
    </div>
  );
}
