import { css } from '@emotion/react';

const footerStyles = css`
  padding: 10px 20px;
  color: white;
  background-color: transparent;
  bottom: 0;
`;

export function Footer(props) {
  return (
    <footer
      id="footer"
      css={footerStyles}
      style={{
        color: props.textColor,
        position: props.position,
      }}
    >
      Copyright &copy; 2022 GraphicsCart
    </footer>
  );
}
