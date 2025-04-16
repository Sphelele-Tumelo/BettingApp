
import { useEffect, useState } from 'react';
import api from '../../api/axios.js';


const MyBets = () => {
    const [bets, setBets] = useState([]);

    useEffect(() => {
        api.get('/bets')
            .then(res => setBets(res.data)).catch(err => console.error("Error fetching bets:", err));
    }, []);
    return (
        <div className='p-4'>
            {bets.map(bet => (
             <div key={bet.id}>{bet.name}</div>
            ))};
        </div>
    )
}


export default MyBets;
