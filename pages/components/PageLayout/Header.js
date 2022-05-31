import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

export function Header(props) {
  return (
    <header
      css={props.headerStyles}
      style={{ backgroundColor: props.backgroundColor }}
    >
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
