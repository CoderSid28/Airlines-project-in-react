import React from 'react';

const AircraftCard = ({ aircraft }) => {
    return (
        <div className="aircraft-card">
            <img src={aircraft.imgSrc} alt={aircraft.name} />
            <div className="aircraft-info">
                <h3>{aircraft.name}</h3>
                <p>{aircraft.description}</p>
                <ul>
                    <li>
                        <strong>Category:</strong> {aircraft.category}
                    </li>
                    <li>
                        <strong>Capacity:</strong> {aircraft.capacity}
                    </li>
                    <li>
                        <strong>Max Range:</strong> {aircraft.maxRange}
                    </li>
                    <li>
                        <strong>Cruising Speed:</strong> {aircraft.cruisingSpeed}
                    </li>
                    <li>
                        <strong>Features:</strong> {aircraft.features}
                    </li>
                </ul>
                <a href="#" className="view-details-btn" onClick={(e) => e.preventDefault()}>
                    View Details
                </a>
            </div>
        </div>
    );
};

export default AircraftCard;