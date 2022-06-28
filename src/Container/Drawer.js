import { useEffect, useState } from 'react';
import { FaBars, FaBackward, FaHome, FaInfo, FaStar } from 'react-icons/fa'
import { Body } from './Body';
import './Drawer.css'

export const Drawer = () => {
    const [name, setName] = useState('drawer1')
    // useEffect(()=>{

    //   setName('drawer1')
    // },[])
    return (
        <div className='main'>
            <Body />
            <FaBars size={40} style={{ padding: 15, color: 'wheat', position: 'absolute', top: 0, left: 0 }} onClick={() => setName('drawer2')} />
            <div className={name}>

                <FaBackward size={30} style={{ padding: 15, position: 'absolute', bottom: 0, left: 0 }} color='blueviolet' onClick={() => setName('drawer1')} />
                <div className='container'>
                    <FaHome size={40} color='#ffbf00'/>
                    <a>Home</a>
                </div>
                <div className='container'>
                    <FaInfo size={40} color='#ffbf00'/>
                    <a>Info</a>
                </div>
                <div className='container' >
                    <FaStar size={40} color='#ffbf00' />
                    <a>skills</a>
                </div>


            </div>
        </div>
    )
}