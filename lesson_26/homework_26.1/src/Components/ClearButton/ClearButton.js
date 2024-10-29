import React from 'react';
import './ClearButton.css'

class ClearButton extends React.Component {
    handleClearResults() {
        const resetEmojis = this.props.emojis.map(function(emoji) {
            return { ...emoji, votes: 0 };
        });
        this.props.setEmojis(resetEmojis);
        this.props.clearWinners();
        localStorage.setItem("emojis", JSON.stringify(resetEmojis));
    }

    render() {
        return (
            <button className="clear-button" onClick={this.handleClearResults.bind(this)}>
                Clear Results
            </button>
        );
    }
}

export default ClearButton;
