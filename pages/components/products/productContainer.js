import { css } from "@emotion/react";
import Image from "next/image";

const productContainerStyles = css`
    color: black;
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 20em;
    box-shadow: 0 0 5px 2px #aba9a9;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    .imageDiv{
        position: relative;
        width: 20em;
        height: 20em;
    }

    h3{
        width: 100%;
        text-align: center;
        margin: 0;
    }

    span{
        width: 100%;
        text-align: center;
    }

    .stock{
        width: 100%;
        display: inherit;
        padding: 1em 2em;
        font-weight: 600;
        justify-content: space-between;
    }

    button{
        z-index: 3;
        display: inherit;
        justify-content: center;
        align-items: center;
        padding: 1em;
        margin: 1.2em 0;
        width: 50%;
        height: 2em;
        font-family: inherit;
        color: white;
        background-color: black;
        cursor: pointer;

        &:active{
            transform: scale(0.95);
            transition: ease;
        }

        &:disabled{
            filter: opacity(0.2);

            &:active{
                transform: scale(1);
            }
        }
    }

    &:hover{
        transform: scale(1.05);
        box-shadow: 0 0 20px 5px #aba9a9;
        transition: 0.2s ease;
    }

    &:active{
        transform: scale(1.03);
        transition: ease;
    }
`;

export function ProductContainer({productInformation}){
    return <a css={productContainerStyles} href={`/product?id=${encodeURIComponent(productInformation.manufacturer)}-${encodeURIComponent(productInformation.model)}`} data-test-id={`product-${productInformation.manufacturer}-${productInformation.model}`}>
        <div className="imageDiv">
            <Image src={productInformation.image} layout="fill" objectFit="cover"/>
        </div>
        <div style={{marginTop: '2em'}}>
            <h3>{productInformation.model}</h3>
            <span className="model">{productInformation.manufacturer}</span>
        </div>
        <div className="stock">
            {productInformation.inStock ? <span style={{color: 'Lime'}}>in Stock</span> : <span style={{color: 'Red'}}>out of Stock</span>}
            <span>{productInformation.price}</span>
        </div>
        <button disabled={!productInformation.inStock}>Add to cart</button>
    </a>;
}