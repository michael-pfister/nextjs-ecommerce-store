import { css } from '@emotion/react';
import Head from 'next/head';

const mainStyles = css`
  .promiseSection {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: transparent;
    color: white;
    width: 100%;

    h1 {
      color: white;
      font-size: 100px;
      font-weight: 200;
      margin-top: 0;
      margin-bottom: 60px;
    }

    ul {
      display: grid;
      padding: 0;
      list-style: none;
      grid-template-columns: repeat(3, 1fr);

      li {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 0 50px;

        img {
          width: 80px;
          padding: 10px;
          background-color: white;
          border-radius: 10px;
        }
      }

      & > :nth-of-type(1) {
        border-right: 1px solid white;
      }

      & > :nth-of-type(2) {
        border-right: 1px solid white;
      }
    }
  }
`;

const videoBannerStyles = css`
  position: absolute;
  z-index: -1;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  align-items: center;
  justify-content: center;

  iframe {
    position: absolute;
    width: 100%;
    height: ${(1080 / 1920) * 100}vw;
    background-color: black;
    z-index: -1;
    //centering
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>GraphicsCart</title>
        <meta name="description" content="GPU Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={mainStyles}>
        <section css={videoBannerStyles}>
          <iframe
            src="https://www.youtube.com/embed/7QeoZY4tf9I?autoplay=1&mute=1&controls=0&disablekb=1&loop=1&playlist=7QeoZY4tf9I"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            sandbox
          />
          <section className="promiseSection">
            <h1>punchline.</h1>
            <ul>
              <li>
                <div>
                  <img
                    src="/images/homepage/delivery.jpg"
                    alt="fast delivery"
                  />
                </div>
                <div>
                  <h2>super fast delivery</h2>
                  <p>
                    Neat own nor she said see walk. And charm add green you
                    these. Sang busy in this drew ye fine.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <img src="/images/homepage/price.png" alt="fast delivery" />
                </div>
                <div>
                  <h2>best price on the market</h2>
                  <p>
                    Neat own nor she said see walk. And charm add green you
                    these. Sang busy in this drew ye fine.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="/images/homepage/warranty.png"
                    alt="fast delivery"
                  />
                </div>
                <div>
                  <h2>2 year warranty</h2>
                  <p>
                    Neat own nor she said see walk. And charm add green you
                    these. Sang busy in this drew ye fine.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </section>
      </main>
    </div>
  );
}
