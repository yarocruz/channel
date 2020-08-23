import React from 'react';
import Loader from 'react-loader-spinner';

export default function Spinner() {
    return (
        <Loader
            type="ThreeDots"
            color="#49698E"
            height={60}
            width={60}
            timeout={1000}
        />
    )
}