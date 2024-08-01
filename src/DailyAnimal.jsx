import Swan from './Swan.jsx';
import Elephant from './Elephant.jsx';
import Crocodile from './Crocodile.jsx';
import Rhino from './Rhino.jsx';
import Beetle from './Beetle.jsx';
import Cobra from './Cobra.jsx';
import Koi from './Koi.jsx';
import { useEffect } from 'react';

export default function DailyAnimal() {

    const current_time = new Date();
    const day = current_time.getDay();

    return (
        <>
        {day === 0 ? (<Swan />) : (day === 1 ? (<Elephant />) : (day === 2 ? (<Crocodile />) : (day === 3 ? (<Rhino />) : 
    (day === 4 ? (<Beetle />) : (day === 5 ? (<Cobra />) : (<Koi />))))))}
        </>
    );
};