import { css } from '@emotion/react';
import { ProductContainer } from './ProductContainer';

const featuredStyles = css`
  margin: 2em 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 1em;
    font-weight: 500;
    font-size: 2em;
  }
`;

export function ProductsGrid({ products, heading, gridColumns }) {
  return (
    <section css={featuredStyles}>
      <h1>{heading}</h1>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(${gridColumns}, 1fr);
          gap: 30px;
        `}
      >
        {products.map((product) => {
          return (
            <ProductContainer
              key={`${product.manufacturer}-${product.model}`}
              productInformation={product}
            />
          );
        })}
      </div>
    </section>
  );
}
