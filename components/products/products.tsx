import React from 'react';
import "./products.css"
import Image from "next/image";
import img1 from "../../src/assest/two_women_in_pink_and_black_costumes.jpg"
import img2 from "../../src/assest/Asian_woman_wears_beige_trench.jpg"
import img3 from "../../src/assest/w.jpg"
import imgg from "../../src/assest/jj.jpg"




const ImageComponent = (props: any) => {
    return (<Image src={props.src} alt="Dojo Helpdesk logo" style={{width:"100%",height:"100%"}} />
    )
    
};

const TitleComponent = (props: any) => {
    return <h5 style={{textAlign:"center"}}>{props.title}</h5>;
};

const PriceComponent = (props: any) => {
    return <p className='price'>{props.price}</p>;
};
const ProductItem = (props: any) => {
    return (
        <div className="container-products">
            <div>
                <ImageComponent src={img1} />
                <TitleComponent title='Pink Costume' />
                <PriceComponent price="300.00$" />
            </div>
            <div>
                <ImageComponent src={img2} />
                <TitleComponent title='White Jacket' />
                <PriceComponent price="400.00$" />
            </div>
            <div>
                <ImageComponent src={img3} />
                <TitleComponent title='Trench Coat' />
                <PriceComponent price="500.00$" />
            </div>
            <div>
                <ImageComponent src={imgg} />
                <TitleComponent title='Blue Cotton Costume' />
                <PriceComponent price="500.00$" />
            </div>
        </div>
    );
};

export default ProductItem;