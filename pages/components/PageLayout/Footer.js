import { css } from '@emotion/react';

export function Footer(props) {
  return (
    <footer
      id="footer"
      css={props.footerStyles}
      style={{
        backgroundColor: props.backgroundColor,
        position: props.position,
      }}
    >
      Copyright &copy; 2022 GraphicsCart
    </footer>
  );
}
