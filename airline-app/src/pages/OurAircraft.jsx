import React from 'react';
import AircraftCard from '../components/AircraftCard';

const fleetData = [
    {
        id: 1,
        name: 'Gulfstream G650ER',
        imgSrc: 'https://nbaa.org/wp-content/uploads/2019/10/MA8_4647_Jeteffect_Inc_Gulfstream_G650ER.jpg',
        description: 'The pinnacle of private aviation, offering unmatched range, speed, and luxury for intercontinental travel.',
        category: 'Heavy Jet',
        capacity: 'Up to 16 Passengers',
        maxRange: '7,500 nm (13,890 km)',
        cruisingSpeed: 'Mach 0.90',
        features: 'Ultra-long range, spacious cabin, advanced avionics.',
    },
    {
        id: 2,
        name: 'Bombardier Challenger 350',
        imgSrc: 'https://www.gamaaviation.com/wp-content/uploads/2017/10/Bombardier-Challenger-300.jpg',
        description: 'A leading super mid-size jet known for its comfortable cabin, exceptional performance, and reliability.',
        category: 'Super Mid-Size Jet',
        capacity: 'Up to 10 Passengers',
        maxRange: '3,200 nm (5,926 km)',
        cruisingSpeed: 'Mach 0.82',
        features: 'Stand-up cabin, quiet environment, excellent short-field performance.',
    },
    {
        id: 3,
        name: 'Embraer Phenom 300E',
        imgSrc: 'https://asa-aircharter.com/wp-content/uploads/2016/04/Embraer-Phenom-300-exterior.jpg',
        description: 'A popular light jet offering impressive speed, range, and one of the largest cabins in its class.',
        category: 'Light Jet',
        capacity: 'Up to 7 Passengers',
        maxRange: '2,010 nm (3,724 km)',
        cruisingSpeed: '464 knots (859 km/h)',
        features: 'Advanced cabin technology, comfortable seating, efficient operations.',
    },
    {
        id: 4,
        name: 'Beechcraft King Air 350i',
        imgSrc: 'https://royalairinc.com/wp-content/uploads/2017/05/1975-Beechcraft-King-Air-200-GTO.jpg',
        description: 'The King Air 350i is a versatile turboprop, perfect for regional flights, offering robust performance and comfort.',
        category: 'Turboprop',
        capacity: 'Up to 9 Passengers',
        maxRange: '1,806 nm (3,345 km)',
        cruisingSpeed: '312 knots (578 km/h)',
        features: 'Excellent short-field capability, cost-effective for shorter distances.',
    },
    {
        id: 5,
        name: 'Dassault Falcon 8X',
        imgSrc: 'https://c.flyradius.com/images/dassault-falcon-8x/dassault-falcon-8x-jet.jpg',
        description: 'Combining long-range capabilities with unparalleled efficiency and quietness, ideal for discerning travelers.',
        category: 'Long-Range Jet',
        capacity: 'Up to 16 Passengers',
        maxRange: '6,450 nm (11,945 km)',
        cruisingSpeed: 'Mach 0.85',
        features: 'Three engines for enhanced safety, quietest cabin, excellent short-field performance.',
    },
    {
        id: 6,
        name: 'Cessna Citation XLS+',
        imgSrc: 'https://images.aircharterservice.com/global/aircraft-guide/private-charter/cessna-citation-xls-plus.jpg',
        description: 'A popular mid-size jet offering a stand-up cabin, good range, and a reputation for reliability and comfort.',
        category: 'Mid-Size Jet',
        capacity: 'Up to 9 Passengers',
        maxRange: '2,100 nm (3,889 km)',
        cruisingSpeed: '441 knots (817 km/h)',
        features: 'Spacious cabin, efficient operation, popular choice for business travel.',
    },
];

const OurAircraft = () => {
    return (
        <div className="page-content">
            <title>Our Aircraft - Air Lines International</title>
            <h2>Our Fleet</h2>
            <p>
                At Air Lines International, we pride ourselves on a diverse and meticulously maintained fleet designed to meet a wide range of travel needs, from luxurious long-haul flights to efficient regional charters. Each aircraft in our fleet is chosen for its superior performance, comfort, and advanced safety features.
            </p>
            <p>Explore some of our key aircraft below:</p>

            <div className="aircraft-grid">
                {fleetData.map((aircraft) => (
                    <AircraftCard key={aircraft.id} aircraft={aircraft} />
                ))}
            </div>
        </div>
    );
};

export default OurAircraft;