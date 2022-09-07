import React from 'react'
import '../css/convert.css';
import DropDown from './dropDown';
import { Link } from 'react-router-dom';

export function Convert() {
    
    return (
        <>
        <Link to="/" style={{color: 'white', textDecoration: 'none', fontFamily: 'Oxygen', paddingLeft:'5px'}}> {'< Go Back'}</Link>
            <div className="convert-container">
                <div><h1 style={{ textAlign: 'center', paddingTop: '5px' }}>Convert</h1></div>
                <div>
                    <DropDown title={"From"} />
                    <DropDown title={"To"} />
                    
                </div>

            </div>
        </>
    )
}

export default Convert;