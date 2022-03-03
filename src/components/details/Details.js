import React from 'react';
import { useParams } from 'react-router-dom';
import ConverterPanel from '../converter-panel/ConverterPanel';

export default function Details() {
    const { id } = useParams();
        return(
            <>
            <ConverterPanel data={id.split('_')} />
            </>
            
        )
}