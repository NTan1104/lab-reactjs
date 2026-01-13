import { useState } from "react";
import './Alert.css';

function Alert() {
    const [alertType, setAlertType] = useState(null);

    return (
        <div className="container">
            <button onClick={() => setAlertType('success')}>Success</button>
            <button onClick={() => setAlertType('warning')}>Warning</button>
            <button onClick={() => setAlertType('error')}>Error</button>

            {alertType && (
                <div className={`alert alert-${alertType}`}>
                    {alertType === 'success' && 'Thành công!'}
                    {alertType === 'warning' && 'Cảnh báo!'}
                    {alertType === 'error' && 'Lỗi!'}
                    <button className="close-btn" onClick={() => setAlertType(null)}>Exit</button>
                </div>
            )}
        </div>
    );
}

export default Alert;