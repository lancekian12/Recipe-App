import React from 'react'

const Star = (props) => {
    let starIcon = props.isFilled.isFavorite ? "" : ""

    return (
        <button
            onClick={props.click}
            aria-pressed={props.isFilled.isFavorite}
            aria-label={props.isFilled.isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="favorite-button"
        >
            <img
                src={starIcon}
                alt={props.isFilled.isFavorite ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>
    )
}

export default Star