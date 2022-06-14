import { css } from '@emotion/react';
import Image from 'next/image';
import { CartCookie, CartCookieItem } from '../../../utilities/cookies';

const productContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid black;

  .imageDiv {
    position: relative;
    width: 150px;
    height: 150px;
  }

  ul {
    li {
      display: flex;
      flex-wrap: wrap;
      text-align: right;
      align-items: center;

      strong,
      p {
        width: 100%;
      }

      select {
        width: 50px;
        border: none;
        outline: none;
      }

      &:nth-of-type(1) {
        width: 100px;
      }
    }
  }

  .removeFromCart {
    border: none;
    width: auto;
    background-color: white;
    color: black;
    font-size: small;
    margin: 0;
    padding: 0;
    width: 114px !important;
    height: 1em;
    text-decoration: underline;
  }
`;

export default function ProductContainer(props) {
  if (!props) {
    props = null;
  }

  const optionsArray = [1, 2, 3, 4, 5];
  props.productQuantity > 5 && optionsArray.push(props.productQuantity);

  return (
    <div css={productContainerStyles}>
      <div className="imageDiv">
        <Image src={props.product.imagePath} layout="fill" objectFit="cover" />
      </div>
      <div>
        <ul>
          <li>
            <strong>{props.product.manufacturer}</strong>
            <p>{props.product.model}</p>
          </li>
          <li>{props.product.price} €</li>
          <li>
            <select
              defaultValue={props.productQuantity}
              onChange={(event) => {
                new CartCookie().removeCartItem(
                  new CartCookieItem(
                    props.product.id,
                    props.productQuantity - event.target.value,
                  ),
                );
                props.setCartCookie(new CartCookie());
                props.setCartItemCount(new CartCookie().getCartItemCount());
              }}
            >
              {optionsArray.map((element) => (
                <option
                  key={`products-${props.product.id}-quantitySelection-${element}`}
                >
                  {element}
                </option>
              ))}
            </select>
          </li>
          <li>
            {Math.round(props.productQuantity * props.product.price * 100) /
              100}{' '}
            €
          </li>
        </ul>
        <button
          className="removeFromCart"
          onClick={() => {
            new CartCookie().removeCartItem(
              new CartCookieItem(props.product.id, props.productQuantity),
            );
            props.setCartCookie(new CartCookie());
            props.setCartItemCount(new CartCookie().getCartItemCount());
          }}
        >
          remove from cart
        </button>
      </div>
    </div>
  );
}
