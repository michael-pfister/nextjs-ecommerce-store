import { css } from '@emotion/react';

const footerStyles = css`
  position: fixed;
  width: 100%;
  padding: 10px 20px;
  color: white;
  background-color: black;
  bottom: 0;
`;

export function Footer() {
  return <footer css={footerStyles}>Copyright &copy; 2022 GraphicsCart</footer>;
}
