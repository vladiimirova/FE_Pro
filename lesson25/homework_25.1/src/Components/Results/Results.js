import React, { useState } from 'react';
import './Results.css';
import ClearButton from '../ClearButton/ClearButton';

function Results(props) {
    const [winners, setWinners] = useState([]);

    function clickResults() {
        const maxVotes = Math.max.apply(null, props.emojis.map(function(emoji) {
            return emoji.votes;
        }));
        const topWinners = props.emojis.filter(function(emoji) {
            return emoji.votes === maxVotes;
        });
        setWinners(topWinners);
    }

    function clearWinners() {
        setWinners([]);
    }

    return (
        <div>
            <h2>Results</h2>
            <div className="btn-wrapper">
            <button className="results-button" onClick={clickResults}>
                Show Results
            </button>
                <ClearButton 
                    emojis={props.emojis} 
                    setEmojis={props.setEmojis} 
                    clearWinners={clearWinners} 
                />
            </div>
            {winners.length > 0 && (
                <>
                    <h3>Current Winners:</h3>
                    {winners.map(function(winner, index) {
                        return (
                            <p className="winners" key={index}>
                                {winner.emoji} - {winner.votes} votes
                            </p>
                        );
                    })}
                </>
            )}
            
        </div>
    );
}

export default Results;
