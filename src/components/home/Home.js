import React from 'react';
import ConverterPanel from '../converter-panel/ConverterPanel';

export default function Home() {
    return (
        <>
            <ConverterPanel data={{from:'EUR', to: 'USD'}} showMore={true} />
        </>
    )

}