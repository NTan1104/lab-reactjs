import './StatusBadge.css';
import React, { useState } from 'react'

function StatusBadge(props) {
    const [status, setStatus] = useState(props.status || 'online');
    const changeStatus = () => {
        if (status === 'online') setStatus('offline');
        else if (status === 'offline') setStatus('busy');
        else setStatus('online');
    }
    return (
        <div>
            <button className={`btn-${status}`}>{status}</button>
            <br />
            <button className='btn-change' onClick={changeStatus}>Change Status</button>
        </div>
    )
}

export default StatusBadge
