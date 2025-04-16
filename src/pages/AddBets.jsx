

import React, { useState } from 'react';
import api from '../../api/axios';

const AddBets = () => {
   const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleChange = (e) => {
        setName({...name, [e.target.name]: e.target.value});
        setAmount({...amount, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/bets', name);
            alert('Bet added successfully!');
            console.log('Bet added:', response.data);

        } catch (err) {
            console.error('Error adding bet:', err || err.response || err.message );
            alert('Failed to add bet. Please try again.');
        }
    }
    return (

        <form onSubmit={handleSubmit} className='max-w-md p-4 rounded shadow'>

            <h1 className="text-lg font-bold mb-4 justify-content-start">Add new Bets</h1>

            <input type="text"
                placeholder='Bet Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-3 border-none hover:border rounded"
                required />

            <input type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-2 mb-3 border-none hover:border rounded"
                required />

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Bet
            </button>

        </form>
    );


};
export default AddBets;