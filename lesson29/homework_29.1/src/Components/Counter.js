import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../Store/Store.js';

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState('');  

    function handleIncrement() {
        dispatch(increment());
    }

    function handleDecrement() {
        dispatch(decrement());
    }

    function handleIncrementByAmount() {
        const amountValue = Number(amount);  
        if (!isNaN(amountValue) && amountValue !== 0) {  
            dispatch(incrementByAmount(amountValue));
        } else {
            alert('Please enter a valid number greater than 0');
        }
    }

    return (
        <div className='bg-gray-800 text-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold mb-4'>Redux Counter App</h1>
        <h2 className='mt-2 text-xl'>Counter: {count}</h2>
        <div className='mt-5 flex space-x-4'>
            <button
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300'
                onClick={handleIncrement}>
                +
            </button>
            <button
                className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-300'
                onClick={handleDecrement}>
                -
            </button>
        </div>
        <div className='mt-5'>
        <input
    type='number'
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    className='px-4 py-2 w-[150px] rounded border border-gray-300 text-black'
    placeholder='Enter amount'
/>
            <button
                className='ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300'
                onClick={handleIncrementByAmount}>
                Increment by Amount
            </button>
        </div>
    </div>
    );
}

export default Counter;