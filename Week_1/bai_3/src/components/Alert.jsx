import React, { use, useState } from 'react'
import './Alert.css';
function Alert() {
    const [type, setType] = useState('');
    const [mess, setMess] = useState('');
    const handleClick = (clicked) =>{
        setType(clicked);
        setMess(`This is a ${clicked}`);
    }

  return (
    <div>
        <div className='notice'>
            <p className={`type-${type}`}>{mess}</p>
        </div>
        <div className='alert-group'>
            <button className={`type-${type}`} onClick={()=>handleClick('success')}>Success</button>
            <button className={`type-${type}`} onClick={()=>handleClick('warning')}>Warning</button>
            <button className={`type-${type}`} onClick={()=>handleClick('error')}>Error</button>
        </div>
      
    </div>
  )
}

export default Alert
