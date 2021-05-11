import React from 'react'
import { FaDog } from "react-icons/fa";

function LandingPage() {
    return (
        <>
            <div className="app">
                <img src="/uniceplacs-removebg.png" alt="uniceplac" style={{ height:'500px'}}/>
                <span style={{ fontSize: '2rem' }}>Medicina Veterinaria Uniceplac </span>
                <span> <FaDog style={{ fontSize: '2rem' }} /><br /></span>
            </div>
            <div style={{ float: 'right' }}></div>
        </>
    )
}

export default LandingPage
