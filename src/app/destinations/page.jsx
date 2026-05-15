import DestinationCard from '@/components/DestinationCard';
// import { auth } from '@/lib/auth';
// import { headers } from 'next/headers';
import React from 'react';

const DestinationPage = async() => {

    // const {token} = await auth.api.getToken({
    //     headers : await headers()
    // })

    // const res = await fetch('${process.env.NEXT_PUBLIC_SERVER_URL}/destination',{
    //     headers: {
    //         authorization: `Bearer ${token}`
    //     }
    // });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
    const destinations = await res.json();
    // console.log(destinations);
    

    return (
        <div className='max-w-7xl mx-auto pt-4'>
            <h1 className='text-2xl md:text-5xl font-bold text-center md:text-left'>All Destinations</h1>
            <div className='md:m-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    destinations.map(destination=><DestinationCard key={destination._id} destination={destination}>
                        </DestinationCard>
                )}
            </div>
        </div>
    );
};

export default DestinationPage;