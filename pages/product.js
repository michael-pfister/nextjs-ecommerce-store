import { css } from "@emotion/react";
import Image from "next/image";
import { consumers } from "stream";
import { products } from './simulated_data/database';

const productSectionStyles = css`
    display: flex;
    justify-content: center;
    height: 87.9vh;
    align-items: center;

    .image{
        position: relative;
        width: 30em;
        height: 30em;
    }

    .text{
        width: 30em;
        height: 30em;
        text-align: center;
    }
`;

function getItem(query, products){
    let searchTerms = query.id.split('-');
    const item = products.find((element) => {
        return element.manufacturer === searchTerms[0] && element.model === searchTerms[1];
    });

    return item;
}

export default function Product(props){
    const item = getItem(props.query, props.products);
    return <section css={productSectionStyles}>
        <div className="image">
            <Image src={item.image} layout="fill" objectFit="cover" />
        </div>
        <div className="text">
            <h1>{item.manufacturer} {item.model}</h1>
            {item.inStock ? <span style={{color: 'Lime'}}>in Stock</span> : <span style={{color: 'Red'}}>out of Stock</span>}
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
    </section>;
}

export function getServerSideProps(context){
    const query = context.query;

    return { props: {query, products} };
}