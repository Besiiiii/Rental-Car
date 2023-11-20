import React from "react"

export const Cataloge = () => {
    return(
        <div className="maincl">
            <div className="upper">
            <h1>Our Fleet</h1>
            <p className="w-50">Looking for an unforgettable experience? Get behind the wheel of one of our many exotic cars for rent. We have them all in the fleet with 
                the best pricing guaranheed and more free miles included if it's speed. Gorgeous looks and the unmistakable roar of a race inspired engine that you're after.</p>
            </div>
            <div className="uppersc">
                <button>Sort By Brends</button>
                <button>View Available Cars</button>
                <button>Sort By Type</button>
                <button>Low/High Price</button>
            </div>
            <div className="cars">
                <div className="car">
                    <div className="carform"></div>
                    <img src="images/Golf7.png" alt="Golfi" />
                    <h2>Golf 7</h2>
                    <h3>Price $35 -> </h3>
                    <a href="/">More Detals</a>
                    <button className="btnbook">Book Now</button>
                </div>
                <div className="car">
                    <div className="carform"></div>
                    <img src="images/Golf7.png" alt="Golfi" />
                    <h2>Mercedes E</h2>
                    <h3>Price $35 -></h3>
                    <a href="/">More Detals</a>
                    <button className="btnbook">Book Now</button>
                </div>
            </div>
        </div>
    )
}