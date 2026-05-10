import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async() => {

    const res = await fetch('http://localhost:5000/destination');
    const destinations = await res.json();
    // console.log(destinations);
    

    return (
        <div className='max-w-7xl mx-auto pt-4'>
            <h1 className='text-2xl md:text-5xl font-bold'>All Destinations</h1>
            <div className='m-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    destinations.map(destination=><DestinationCard key={destination._id} destination={destination}>
                        </DestinationCard>
                )}
            </div>
        </div>
    );
};

export default DestinationPage;