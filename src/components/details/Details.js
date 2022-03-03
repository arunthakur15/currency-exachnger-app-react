import React from 'react';
import { useParams } from 'react-router-dom';
import ConverterPanel from '../converter-panel/ConverterPanel';

export default function Details() {
    const { id } = useParams();
    const data = id ? {from:id.split('_')[0],to:id.split('_')[1]} : {from:'EUR', to: 'USD'};
        return(
            <>
            <ConverterPanel data={data} showMore={false} />
            </>
            
        )
}