import React from 'react'
import { useGetRates } from '../useGetRates.js';
import '../css/rates.css';
import { nanoid } from '@reduxjs/toolkit';
import {motion} from 'framer-motion'
export function Rates() {
    const data = useGetRates('https://www.floatrates.com/daily/usd.json')
    let arrOfRates = Object.values(data);

    

    return (
        <>
            <div className='rates'>
                {
                   arrOfRates.map(each => {
                    return (
                    <motion.div animate={{x: [-300, 0]}} 
                     key={nanoid()} className='eachRate'>
                        <div id='name' className='rateStyle'>
                            <p>Currency</p>
                            <h3>{each.name}</h3>
                        </div>
                        <div id='code' className='rateStyle'>
                            <p>Code</p>
                            <h3>{each.code}</h3>
                        </div>
                        <div id='rate' className='rateStyle'>
                            <p>Rate</p>
                            <h3>{Math.round(parseFloat(each.rate)*10000)/10000}</h3>
                        </div>
                        <div id='inverseRate' className='rateStyle'>
                            <p>Inverse Rate</p>
                            <h3>≈ {Math.round(parseFloat(each.inverseRate)*100)/100}</h3>
                        </div>
                        <div id='updatedDate' className='rateStyle'>
                            <p>Updated</p>
                            <h3>{each.date.substring(0, 15)}</h3>
                        </div>
                    </motion.div>
                    )
                   })
                    
                }
            </div>
        </>
    )
}

export default Rates;
