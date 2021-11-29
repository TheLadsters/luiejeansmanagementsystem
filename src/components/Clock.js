import React, { useState, useEffect } from 'react'

const Clock = () => {

    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
            }, 0);
        }, []);

    return <div style={{fontSize: "22px"}}>{clockState}</div>;
}

export default Clock;
