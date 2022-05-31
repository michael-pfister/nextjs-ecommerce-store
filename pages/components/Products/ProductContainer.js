import { css } from '@emotion/react';
import Image from 'next/image';

const productContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 250px;
  box-shadow: 0 0 5px 2px #aba9a9;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  a {
    display: inherit;
    flex-wrap: inherit;
    text-decoration: none;
    color: black;

    .imageDiv {
      position: relative;
      width: 100%;
      height: 250px;
    }

    .text {
      width: 100%;
      margin-top: 20px;
      text-align: center;
    }

    h3 {
      margin: 0;
    }

    span {
      width: 100%;
      text-align: center;
    }

    .stock {
      width: 100%;
      display: inherit;
      padding: 10px 0;
      font-weight: 600;
      justify-content: space-between;
    }
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px 5px #aba9a9;
    transition: 0.2s ease;
  }

  &:active {
    transform: scale(1.03);
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
        <div className="text">
          <h3>{productInformation.model}</h3>
          <span className="model">{productInformation.manufacturer}</span>
        </div>
        <div className="stock">
          {productInformation.inStock ? (
            <span style={{ color: 'Lime' }}>in Stock</span>
          ) : (
            <span style={{ color: 'Red' }}>out of Stock</span>
          )}
          <span>{productInformation.price}</span>
        </div>
      </a>
      <button disabled={!productInformation.inStock}>add to cart</button>
    </div>
  );
}
