import { css } from "@emotion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const imageSrcs = ['/images/slideshow/RTX-30-Series.jpg',
                '/images/slideshow/RX-6000-Series.jpg'];

let currentImageIndex = 0;

const slideshowStyles = css`
    position: relative;
    width: 100%;
    height: 20rem;
    margin: 1em 0;
`;

function changeImage(setBanner){
    currentImageIndex+1===imageSrcs.length ? currentImageIndex = 0 : currentImageIndex++;
    setBanner(imageSrcs[currentImageIndex]);
}

export function SlideShow(){
    const [banner, setBanner] = useState('/images/slideshow/RTX-30-Series.jpg');

    useEffect(()=>{
        const interval = setInterval(() => {
            changeImage(setBanner);
          }, 10000);
        
        return () => clearInterval(interval);
    }, []);

    return <div css={slideshowStyles}>
        <Image src={banner} layout="fill" objectFit="cover"/>
    </div>;
}