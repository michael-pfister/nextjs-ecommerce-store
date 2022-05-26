import { css } from '@emotion/react';

const footerStyles = css`
  padding: 10px 20px;
  color: white;
  background-color: black;
`;

export function Footer() {
  return <footer css={footerStyles}>Copyright &copy; 2022 GraphicsCart</footer>;
}
