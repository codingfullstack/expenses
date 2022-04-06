import React from 'react';
import useBalance from '../../useBalance';

const Balance = () => {
    const { totalType } = useBalance();

    return <div className='mx-auto my-1 border-bottom' >
        <div className='text-center p-3 '>
            <h4>Your money</h4>
            <h3 className='text-white'>{totalType}</h3>
            </div>

    </div>;
};

export default Balance;
