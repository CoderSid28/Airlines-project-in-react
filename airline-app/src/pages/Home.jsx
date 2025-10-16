
import React, { useState, useEffect } from 'react';


const sliderImages = [
    {
        src: "https://cdn.pixabay.com/photo/2015/04/22/08/08/airplane-734363_1280.jpg",
        alt: "Airplane flying in the sky",
    },
    {
        src: "https://wallpaperaccess.com/full/254472.jpg",
        alt: "Airplane in front of a terminal",
    },
    {
        src: "https://www.setaswall.com/wp-content/uploads/2017/06/Airplane-Wallpapers-29-1920-X-1200.jpg",
        alt: "Airplane with a beautiful sunset",
    },
];

const Home = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0);

    
    const handleActionClick = (e) => {
        e.preventDefault();
       
        alert('Action Triggered: This would navigate to a new page or submit a form.');
    };

   
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, []); 

    return (
        <>
            <title>Air Lines International</title>
            
          
            <section className="hero">
                {sliderImages.map((slide, index) => (
                    <img 
                        key={index}
                        src={slide.src}
                        alt={slide.alt}
                        
                        className={`slider-image ${index === currentSlide ? 'active' : ''}`}
                    />
                ))}
                
             
                <div className="hero-content">
                    <h2>
                        <span className="blue">COMFORT</span> <span className="white">Guaranteed</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button onClick={handleActionClick}>
                        ORDER TICKETS ONLINE <span className="arrow">&gt;</span>
                    </button>
                </div>
            </section>

            
            <div className="container">
                
           
                <aside className="sidebar">
                    <section className="flight-planner">
                        <h3>Your Flight Planner</h3>
                        <div className="trip-options">
                            <label><input type="radio" name="trip" defaultChecked /> Round Trip</label>
                            <label><input type="radio" name="trip" /> One Way</label>
                            <label><input type="radio" name="trip" /> Empty-Leg</label>
                            <label><input type="radio" name="trip" /> Multi-Leg</label>
                        </div>
                        <form onSubmit={handleActionClick}>
                            <label>Leaving From:
                                <input type="text" placeholder="Enter City or Airport Code" />
                            </label>
                            <label>Going To:
                                <input type="text" placeholder="Enter City or Airport Code" />
                            </label>
                            <label>Departure Date and Time:
                                <input type="datetime-local" />
                            </label>
                            <label>Return Date and Time:
                                <input type="datetime-local" />
                            </label>
                            <label>Passenger(s):
                                <input type="number" placeholder="# passengers" defaultValue="1" />
                            </label>
                            <button type="submit">GO!</button>
                        </form>
                    </section>

                    <section className="news section">
                        <h3>Recent News</h3>
                        <div className="news-item">
                            <p className="headline">Nemo enim ipsam voluptatem quia</p>
                            <p className="date">November 5, 2010</p>
                        </div>
                        <div className="news-item">
                            <p className="headline">Voluptas aspernatur aut odit aut fugit</p>
                            <p className="date">November 1, 2010</p>
                        </div>
                        <div className="news-item">
                            <p className="headline">Sed quia consequuntur magni</p>
                            <p className="date">October 23, 2010</p>
                        </div>
                    </section>
                </aside>

              
                <main className="main-section">
                    <section className="section welcome">
                        <h3>Welcome to Our Website!</h3>
                        <p>
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                        </p>
                        <p>
                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                        </p>
                        <div className="features">
                            <div className="feature">
                                <h4>Aircraft</h4>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                <button onClick={handleActionClick}>READ MORE</button>
                            </div>
                            <div className="feature">
                                <h4>Charters</h4>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                <div className="charter-buttons">
                                    <button onClick={handleActionClick}>FLEET</button>
                                    <button onClick={handleActionClick}>RESERVATION</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section clients">
                        <h3>Our Clients</h3>
                        <p>
                            Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui.
                        </p>
                        <div className="testimonial">
                            <blockquote>
                                "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
                            </blockquote>
                            <cite>– Mr. Thomas Lloyd</cite>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Home;