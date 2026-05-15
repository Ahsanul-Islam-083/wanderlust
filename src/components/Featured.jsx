import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import DestinationCard from './DestinationCard';

const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const destinations = await res.json();
    console.log(destinations);

    return (
        <div className='mt-10 max-w-7xl mx-auto'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl md:text-5xl font-semibold text-center md:text-left'>Featured Destinations</h1>
                    <p className='text-gray-500 mb-3 text-center md:text-left'>Handpicked travel experiences for the adventure seekers</p>
                </div>
                <Link className='hidden md:flex' href={'/destinations'} ><Button variant='outline' className={'rounded-md text-[#15A1BF] border-[#15A1BF]'}>All Destinations →</Button></Link>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}>
                    </DestinationCard>
                    )}
            </div>
            <Link className='flex md:hidden mt-4 justify-center' href={'/destinations'} ><Button variant='outline' className={'rounded-md text-[#15A1BF] border-[#15A1BF]'}>All Destinations →</Button></Link>
        </div>
    );
};

export default Featured;