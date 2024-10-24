import React, { useState } from 'react';
import ReservationForm from './ReservationForm';

const TableOverview = () => {
    const [isReservationModalOpen, setReservationModalOpen] = useState(false);
    const [selectedTable, setSelectedTable] = useState(null); // Store table data to pass to ReservationForm form

    const tables = [
        { id: 1, game: "Game 1", players: 4 },
        { id: 2, game: "Game 2", players: 2 },
        // Add more table data
    ];

    const handleTableClick = (table) => {
        setSelectedTable(table);
        setReservationModalOpen(true); // Open ReservationForm form when a table is clicked
    };

    return (
        <div>
            <h2>Available Tables</h2>
            <ul>
                {tables.map((table) => (
                    <li key={table.id}>
                        <button onClick={() => handleTableClick(table)}>
                            {table.game} (Players: {table.players})
                        </button>
                    </li>
                ))}
            </ul>
            {isReservationModalOpen && (
                <ReservationForm table={selectedTable} onClose={() => setReservationModalOpen(false)} />
            )}
        </div>
    );
};

export default TableOverview;
