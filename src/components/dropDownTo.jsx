import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import useAlphaCodes from '../alphaCodes';
import { setTo } from '../features/rateReducer';
import "../css/dropDown.css";
function DropDownTo() {

    const [value, setValue] = useState('');
    const [clicked, setClicked] = useState(false);
    const alphaCodes = useAlphaCodes();
    const dispatch = useDispatch();
    return (
        <>
            <div className="dropdown-container">

                <div className='drop'>
                    <h3 style={{ textAlign: 'center' }}>To</h3>
                    <div id='input-dropdown-menu'>
                        <div id='input-with-select'>
                            <div><input onClick={() => { setClicked(true) }} onChange={(e) => { setValue(e.target.value) }} value={value}></input></div>
                            <h4 onClick={() => { setClicked(false); 
                            dispatch(setTo({
                                toCurrency: alphaCodes.filter(each => each[0]===value)
                            }))}}>OK</h4>
                        </div>
                        {clicked ?
                            <div id='actual-menu'>
                                {alphaCodes.filter(each => each[0].toLowerCase().match(new RegExp(value.toLowerCase(), 'g'))).map(each => {
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

export default DropDownTo;
