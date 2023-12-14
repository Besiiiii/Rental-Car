import React from 'react';


export const Aboutus = () => {
    return(
        <div className='aboutus'>
            <div className='d-flex flex-column align-items-center ' style={{paddingTop:'185px', gap:'67px'}}>
                <h1 className='abh'>About Us</h1>
                <div className='aupimg'>
                    <p>Welcome to RENTAL CAR – Your Gateway to Seamless Car Rentals!
                        At RENTAL CAR, we understand that the journey is just as important as the destination. 
                        That's why we've crafted an online car rental experience that's as smooth as the ride in our vehicles.
                        Whether you're a seasoned traveller, a weekend explorer, or a daily commuter, we've got the wheels to make your journey memorable.</p>
                    <img src="images/benz.jpg" alt="Wallpaper About US" />
                </div>
            </div>
            <div className='d-flex flex-column align-items-center ' style={{paddingTop:'85px', gap:'67px'}}>
                <h1>Our Mission</h1>
                <div className='aupimg'>
                    <img src="images/kilometra.jpg" alt="dashboard " />
                    <p>At the heart of RENTAL CAR is a commitment to redefine the way you experience car rentals.
                       We strive to provide convenient, affordable, and reliable transportation solutions, making every trip an enjoyable and stress-free adventure.</p>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center gap-5'>
                <h1>Contact</h1>
                <div className='d-flex flex-column align-items-center gap-2'>
                    <div className='socials'>
                        <img src="images/icons/facebook.png" alt="Facebook" />
                        <img src="images/icons/insta.png" alt="Instagram" />
                    </div>
                    <div>
                        <h2>Email: car-rental@hotmail.com</h2>
                        <h2>Phone Number : 044 999 999</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}