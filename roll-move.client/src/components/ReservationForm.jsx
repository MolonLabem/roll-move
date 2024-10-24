// src/components/ReservationForm.js
//TODO: Add expansions options checkbox after game is chosen
import React from 'react';

function ReservationForm({ table, onClose }) {
    return (
        <div style={{ padding: '20px', background: 'black', border: '1px solid black' }}>
            <h3>Reservation for {table.name}</h3>
            <form>
                <div>
                    <label>Game:</label>
                    <input type="text" required /> 
                </div> 
                
                <div>
                    <label>Date and Time:</label>
                    <input type="datetime-local" required />
                </div>
                <div>
                    <label>Average Play Time:</label>
                    <input type="number" required />
                </div>
                <div>
                    <label>Complexity/Difficulty:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Amount of Players:</label>
                    <input type="number" required />
                </div>
                <div>
                    <label>
                        <input type="checkbox" /> Looking for players
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" /> Need to know rules
                    </label>
                </div>
                <button type="submit">Submit Reservation</button>
            </form>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default ReservationForm;
