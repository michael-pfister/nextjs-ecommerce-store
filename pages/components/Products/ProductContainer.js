import { css } from '@emotion/react';
import Image from 'next/image';

const productContainerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 5px 1px grey;
  gap: 20px;
  cursor: pointer;

  .imageDiv {
    position: relative;
    width: 150px;
    height: 150px;
  }

  .text {
    display: inline;
    flex-wrap: wrap;
    padding-left: 20px;
    border-left: 1px solid black;

    a {
      display: inherit;
      flex-wrap: inherit;
      text-decoration: none;
      color: black;
    }

    button {
      width: 100%;
    }
  }

  h3 {
    margin: 0;
  }

  .stock {
    width: 100%;
    display: flex;
    margin: 20px 0;
    font-weight: 600;
    justify-content: space-between;
  }

  &:hover {
    transform: scale(1.02);
    transition: 0.2s ease;
  }

  &:active {
    transform: scale(1);
    transition: ease;
  }
`;

export function ProductContainer({ productInformation }) {
  return (
    <div css={productContainerStyles}>
      <a
        href={`/product?id=${encodeURIComponent(
          productInformation.manufacturer,
        )}-${encodeURIComponent(productInformation.model)}`}
        data-test-id={`product-${productInformation.manufacturer}-${productInformation.model}`}
      >
        <div className="imageDiv">
          <Image
            src={productInformation.image}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </a>
      <div className="text">
        <a
          href={`/product?id=${encodeURIComponent(
            productInformation.manufacturer,
          )}-${encodeURIComponent(productInformation.model)}`}
        >
          <h3>{productInformation.model}</h3>
          <span className="model">{productInformation.manufacturer}</span>

          <div className="stock">
            {productInformation.inStock ? (
              <span style={{ color: 'Lime' }}>in Stock</span>
            ) : (
              <span style={{ color: 'Red' }}>out of Stock</span>
            )}
            <span>{productInformation.price} €</span>
          </div>
        </a>
        <button disabled={!productInformation.inStock}>add to cart</button>
      </div>
    </div>
  );
}
