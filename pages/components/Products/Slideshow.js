import { css } from '@emotion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const imageSrcs = [
  '/images/slideshow/RTX-30-Series.jpg',
  '/images/slideshow/RX-6000-Series.jpg',
];

let currentImageIndex = 0;

const slideshowStyles = css`
  position: relative;
  width: 100%;
  height: 22rem;
  margin: 2em 0;
  background-color: black;

  img {
    animation: identifier 15s infinite;
  }

  @keyframes identifier {
    0% {
      filter: brightness(0);
      transform: scale(1.1);
    }
    2% {
      filter: brightness(1);
      transform: scale(1);
    }

    98% {
      filter: brightness(1);
      transform: scale(1);
    }
    100% {
      filter: brightness(0);
      transform: scale(1.1);
    }
  }
`;

function changeImage(setBanner) {
  currentImageIndex + 1 === imageSrcs.length
    ? (currentImageIndex = 0)
    : currentImageIndex++;
  setBanner(imageSrcs[currentImageIndex]);
}

export function SlideShow() {
  const [banner, setBanner] = useState('/images/slideshow/RTX-30-Series.jpg');

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage(setBanner);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section css={slideshowStyles}>
      <Image src={banner} layout="fill" objectFit="cover" />
    </section>
  );
}
