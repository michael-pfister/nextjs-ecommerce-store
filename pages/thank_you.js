import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const thankYouStyles = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 100px 0;

  header {
    width: 100%;
    text-align: center;

    h1 {
      font-size: 4em;
    }
  }

  main {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    div {
      display: flex;
      width: 600px;
      margin: 50px 0;
      gap: 20px;
    }

    a {
      width: 100%;
      text-align: center;
      color: black;
    }
  }
`;

export default function ThankYou() {
  return (
    <div css={thankYouStyles}>
      <header>
        <h1>Thank You!</h1>
        <h3>Your order was submitted successfully.</h3>
      </header>
      <main>
        <div>
          <Image
            src="/images/thank_you/email-svgrepo-com.svg"
            alt="email icon"
            width="100px"
            height="100px"
          />
          <p>
            An email receipt including the details about your order has been
            sent to the email address provided. Please keep it for your records.
          </p>
        </div>
        <Link href="/products">continue shopping</Link>
      </main>
    </div>
  );
}
