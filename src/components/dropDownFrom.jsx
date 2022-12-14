import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import useAlphaCodes from '../alphaCodes';
import { setFrom } from '../features/rateReducer';
import { useDispatch } from 'react-redux';
import "../css/dropDown.css";


function DropDownFrom() {

    const [value, setValue] = useState(['', 0]);
    const [clicked, setClicked] = useState(false);
    const alphaCodes = useAlphaCodes();
    const dispatch = useDispatch();

    return (
        <>
            <div className="dropdown-container">

                <div className='drop'>
                    <h3 style={{ textAlign: 'center' }}>From</h3>
                    <div id='input-dropdown-menu'>
                        <div id='input-with-select'>
                            <div><input onClick={() => { setClicked(true) }} onChange={(e) => { setValue([e.target.value, alphaCodes.filter(each => each[0] === value)[1]]) }} value={value[0]}></input></div>
                            <h4 onClick={() => {
                                setClicked(false);
                                
                               
                                dispatch(setFrom({
                                    fromCurrency: value

                                }))
                            }}>OK</h4>
                        </div>
                        {clicked ?
                            <div id='actual-menu'>
                                {alphaCodes.filter(each => each[0].toLowerCase().match(new RegExp(value[0].toLowerCase(), 'g'))).map(each => {
                                    return (
                                        <div key={nanoid()} onClick={() => { setValue(each) }} style={{ cursor: 'pointer' }}>
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

export default DropDownFrom
