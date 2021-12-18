import React from 'react'
import {Link} from 'react-router-dom'
import '../css/LandingPage.css'

export default function LandingPage() {
    return (
        <div className='landing'>
            <h1 className='welcome'>Welcome to Countries!</h1>
            <div className='div'>
            <Link to='/home'>
            <button className='button'>Ingresar</button>
            </Link>
            </div>
        </div>
    )
}