import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setprices] =useState([])
    useEffect ( () =>{
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setprices(data))
    },[])
    return (
        <div className='mx-12'>
            <h1 className='text-center mt-7 text-4xl p-3 bg-blue-400'>Price List</h1>
            <div className=' grid md:grid-cols-3 gap-2  '>
            {
                prices.map(price => <PriceCard
                key={price.id}
                price={price}
                ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;