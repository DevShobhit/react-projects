import React, { useState, useEffect } from 'react'
import { BackShape, Note } from './svg'
import './landing.css'
import note from '../notes.jpg';

function Typing() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const textList = ['with ease', 'in an organised way', 'with Notes'];
    useEffect(() => {
        if (subIndex <= textList[index].length) {
            setTimeout(() => {
                setText(text + textList[index][subIndex]);
                setSubIndex(subIndex + 1);
            }, 220);
        } else {
            setText("");
            setSubIndex(0);
            if (index < textList.length - 1) {
                setIndex(index + 1);
            } else {
                setIndex(0)
            }
        }
    }, [index, subIndex]);
    return (<div className="type">
        &nbsp;{text}
    </div>);
}

function LandingPage() {
    return (
        <div className='landing'>
            <div className="topbar">
                <div className="left">
                    <img src={note} alt="Notes-logo" className="notes-logo logo-main" />
                </div>
                <div className="right">
                    <a href='/login' className="btn">Login</a>
                    <a href='/register' className="btn">Signup</a>
                </div>
            </div>
            <div className="section-header">
                <div className="note-img">
                    <Note />
                </div>

                <div className="heading-text">
                    <div className="heading-main">Capture your ideas</div>
                    <div className="heading-sub">
                        <Typing />
                    </div>
                </div>
            </div>
            <div className="back-shape">
                <BackShape />
            </div>
            <div className="footer">
                &copy;2021 Created by DevShobhit
            </div>
        </div>
    )
}

export default LandingPage
