import { css } from '@emotion/react';

const cartSectionStyles = css`
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;

  h1 {
    width: 100%;
    text-align: center;
  }
`;

export default function Cart() {
  return (
    <section css={cartSectionStyles}>
      <h1>Shopping cart</h1>
    </section>
  );
}
