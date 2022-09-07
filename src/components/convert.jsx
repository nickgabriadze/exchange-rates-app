import React, { useState } from 'react'
import '../css/convert.css';
import DropDownFrom from './dropDownFrom';
import DropDownTo from './dropDownTo';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import rateReducer, { setValue } from '../features/rateReducer';
import { calculate } from '../features/rateReducer';


export function Convert() {

    const [rateValue, setRateValue] = useState(0)
    const [calculated, setCalculated] = useState(false)
    const dispatch = useDispatch();

    const { from, to, result } = useSelector(state => state.rateReducer)
    return (
        <>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontFamily: 'Oxygen', paddingLeft: '5px' }}> {'< Go Back'}</Link>
            <div className="convert-container">
                <div><h1 style={{ textAlign: 'center', paddingTop: '5px' }}>Convert</h1></div>
                <div>
                    <DropDownFrom />
                    <DropDownTo />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: '20px' }}>
                        <p>Value</p>
                        <input type="number" autoComplete="off" style={{ outline: 'none', fontFamily: 'Oxygen', fontSize: '20px' }} id='value' onChange={(e) => setRateValue(e.target.value)} value={rateValue}></input>
                        <div id='calc' onClick={() => {
                            setCalculated(!calculated);
                            dispatch(setValue({
                                value: parseFloat(rateValue)
                            }));
                            
                        }}>
                            Calculate
                        </div>
                        <div id='result'>
                            {calculated ? rateValue  : ''}
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Convert;