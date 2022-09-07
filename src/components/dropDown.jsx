import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import useAlphaCodes from '../alphaCodes';
import "../css/dropDown.css";
function DropDown({ title }) {

    const [value, setValue] = useState('');
    const [clicked, setClicked] = useState(false);
    const alphaCodes = useAlphaCodes();
    console.log(alphaCodes.length)
    return (
        <>
            <div className="dropdown-container">

                <div className='drop'>
                    <h3 style={{ textAlign: 'center' }}>{title}</h3>
                    <div id='input-dropdown-menu'>
                        <div id='input-with-select'>
                            <div><input onClick={() => { setClicked(true) }} onChange={(e) => { setValue(e.target.value) }} value={value}></input></div>
                            <h4 onClick={() => { setClicked(false)}}>OK</h4>
                        </div>
                        {clicked ?
                            <div id='actual-menu'>
                                {alphaCodes.map(each => {
                                    return (
                                        <div key={nanoid()}onClick={()=>{setValue(each[0])}}style={{cursor: 'pointer'}}>
                                            {each[0]} - {each[2]}
                                            <hr></hr>
                                        </div>)
                                })}
                            </div> : ''}
                    </div>
                </div>


            </div>

        </>
    )
}

export default DropDown
