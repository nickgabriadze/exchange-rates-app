import React from 'react'
import '../css/header.css'
import ExchangeIcon from '../icons/currency-exchange.svg';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
export function Header() {
    return (
        <>
            <div className='header' style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around' }}>
                <div>
                    <div className='flex-center'>
                        <h1>Exchange Rates</h1>
                        <img src={ExchangeIcon} alt={"Exchange Symbol"}></img>

                    </div>
                    <p>Updates every 24 hours</p>
                </div>
                <Link to="/convert" style={{color: 'white', textDecoration:'none'}}><motion.p whileHover={{scale:1.1}} 
                whileTap={{scale: 0.8}}
                id='convert-style'>Convert</motion.p>
                </Link>
            </div>

        </>
    )
}

export default Header;
