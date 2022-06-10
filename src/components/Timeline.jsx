import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
                <div className="content">
                    <h1>Wedding Reception</h1>
                    <p>
                        On Tuesday, 21<sup>st</sup> June, 2022,
                        <br />
                        Time: 02:00 PM.
                    </p>
                    <h2>Venue:</h2>
                    <p>
                        NSJ Function Hall,
                        <br /> Tirumala Nagar,
                        <br /> Yemmiganur Road,
                        <br /> Adoni.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
