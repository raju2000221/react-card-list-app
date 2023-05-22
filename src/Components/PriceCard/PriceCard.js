import React from 'react';
import Features from '../Features/Features';

const PriceCard = ({price}) => {
    return (
        <div className='bg-blue-200 p-3 mt-3 rounded-md  '>
            <h3 className='text-center text-4xl'>{price.price}<span className='text-2xl'>/month</span></h3>
            
        
            <h1 className='font-bold text-center text-4xl mt-5'>{price.name}</h1>
            <p className='mt-7 underline'>Features:</p>
            {
                price.features.map((feature,idx) => <Features
                key={idx}
                feature={feature}
                ></Features>)
            }
            <button className='w-full bg-blue-700 p-1 rounded mt-10 hover:bg-blue-950'>Buy Now</button>
        </div>
    );
};

export default PriceCard;