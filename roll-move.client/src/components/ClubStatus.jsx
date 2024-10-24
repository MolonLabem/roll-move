import React, { useState } from 'react';

const ClubStatus = () => {
    const [isOpen, setIsOpen] = useState(true); // Track club status

    const toggleStatus = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <h3>Club Status: <span style={{ color: isOpen ? 'green' : 'red' }}>{isOpen ? 'Open' : 'Closed'}</span></h3>
            <button onClick={toggleStatus}>{isOpen ? 'Close Club' : 'Open Club'}</button>
        </div>
    );
};

export default ClubStatus;
