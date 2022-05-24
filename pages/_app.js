import { css, Global } from '@emotion/react';
import Head from 'next/head';
import { Footer } from './components/PageLayout/footer';
import { Header } from './components/PageLayout/header';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  :root {
    font-family: 'Montserrat', sans-serif;
  }

  body {
    margin: 0;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Global styles={globalStyles} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
