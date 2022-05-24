import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const headerStyles = css`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
  color: white;
  background-color: black;

  h1 {
    margin: 0;
  }

  ul {
    display: inherit;
    list-style: none;
    gap: 20px;

    a {
      text-decoration: none;
      color: white;
    }
  }
`;

export function Header() {
  return (
    <header css={headerStyles}>
      {/* <Image alt="GraphicsCart logo" /> */}
      <h1>GraphicsCart</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/cart">🛒</Link>
        </li>
      </ul>
    </header>
  );
}
