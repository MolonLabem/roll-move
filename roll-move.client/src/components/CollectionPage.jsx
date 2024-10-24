import React, { useEffect, useState } from 'react';
import { getGames } from '../ApiService';

const CollectionPage = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const data = await getGames();
                setGames(data);
            } catch (error) {
                console.error("Failed to fetch games:", error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div>
            <h2>Board Game Collection</h2>
            <ul>
                <p>{games.name}</p>
                {games.length > 0 ? (
                    games.map((game, index) => (
                        <li key={index}>{game.name}</li> // Assuming `game` has a `name` property
                    ))
                ) : (
                    <p>No games available.</p>
                )}
            </ul>
        </div>
    );
};

export default CollectionPage;
