import React  from "react"
// import { Link } from "react-router-dom"


export const Home = () => {
  return( 
        <div className="homepage">
          <div className="firsts">
            <div className="teksti">
                <h1 className="explore">Explore the freedom <br />
                    of car rental with </h1>
                    <h1 className="rental"> RENTAL CAR.</h1>
                <p>Whether you’re planning a road trip , need a reliable vehicle for a 
                    business trip, or jut want the convenience of having a car
                      at your disposal, we’ve got covered.</p>
                      <div className="btnsfirsts">
                      <button className="getcar">Get your car now </button>
                      <a href="/catalog" className="catalogbtnhome">See the catalog here </a>
                      </div>
            </div>
            <div className="picd">
                <div className="picv"></div>
                <img src="images/OctaviaForWebsite.png" alt="OctaviaForWeb" className="octpic" />
            </div>
          </div>
          <div className="howworks">
            <div className="workstekst d-flex justify-content-center">
              <h1>How RENTAL CAR Works</h1>
            </div>
            <div className="iconsats d-flex justify-content-center ">
              <div className="iconsat">
                <img src="images/icons/location.png" alt="LocationLogo" />
                <h2 className="howh2">Search location</h2>
                <h4 className="howh4">Search and pick ours nearest Rental Car.</h4>
              </div>
              <div className="iconsat">
                <img src="images/icons/car.png" alt="CarLogo" />
                <h2 className="howh2">Choose car </h2>
                <h4 className="howh4">Pick the car from our catalog.</h4>
              </div>
              <div className="iconsat">
                <img src="images/icons/time.png" alt="TimeLogo" />
                <h2 className="howh2">Select date</h2>
                <h4 className="howh4">Select the dates your need the car .</h4>
              </div>
              <div className="iconsat">
                <img src="images/icons/payment.png" alt="PaymentIcon" />
                <h2 className="howh2">Payment</h2>
                <h4 className="howh4">Select the method you want to make payment.</h4>
              </div>
            </div>
          </div>
          <div className="infos d-flex justify-content-center align-items-center">
            <div className="infosc">
              <h2>120+</h2>
              <h4>Cars</h4>
            </div>
            <div className="infosc">
              <h2>30+</h2>
              <h4>Pickup Location</h4>
            </div>
            <div className="infosc">
              <h2>2800+</h2>
              <h4>Happy Custumers</h4>
            </div>
          </div>
          <div className="bestdeals">
            <div>
              <h1>Best Deals At Our Rental Car</h1>
            </div>
          </div>
          <div className="cars">
                    <div className="car">
                        <div className="carform"></div>
                        <img src="images/cars/golf7.png" alt="golf7" />
                        <h2>Golf 7</h2>
                        <h3>Price $35</h3>
                        <a href="/">More Details</a>
                        <button className="btnbook">Book Now</button>
                    </div>
                    <div className="car">
                        <div className="carform"></div>
                        <img src="images/cars/PassatZi.png" alt="Passat" />
                        <h2>Passat </h2>
                        <h3>Price $30</h3>
                        <a href="/">More Details</a>
                        <button className="btnbook">Book Now</button>
                    </div>
                    <div className="car">
                        <div className="carform"></div>
                        <img src="images/cars/renaultM.png" alt="Renault" />
                        <h2>Renault</h2>
                        <h3>Price $25</h3>
                        <a href="/">More Details</a>
                        <button className="btnbook">Book Now</button>
                    </div>
          </div>
          <div className="mobileapps">
            <div className="mobileapp">
            </div>
            <div className="mobilestuff">
            <img src="images/icons/Telefoni.png" alt="Telefoni" className="telefonip" />
            <div className="mobile-h-img">
            <h2 className="mobileh">Download our new app and book your first car today.</h2>
            <div className="d-flex gap-5 mobile-img">
            <img src="images/icons/AppStore.png" alt="AppStore" className="store" />
            <img src="images/icons/GooglePlay.png" alt="GooglePlay" className="store" /></div>
            </div>
            </div>
          </div>
          <div className="whyus">
            <h1>Why Us ?</h1>
            <div className="iconsats d-flex justify-content-center ">
              <div className="iconsat">
                <img src="images/icons/timeopen.png" alt="24/7 " />
                <h2 className="howh2">Support 24/7 </h2>
                <h4 className="howh4">Always there for you.</h4>
              </div>
              <div className="iconsat">
                <img src="images/icons/swapcar.png" alt="Swap Cars" />
                <h2 className="howh2">New Cars </h2>
                <h4 className="howh4">New technology , better performance , easy to drive .</h4>
              </div>
              <div className="iconsat">
                <img src="images/icons/security.png" alt="Security" className="imgsec" />
                <h2 className="howh2">Safety</h2>
                <h4 className="howh4">Safety comes first . <br />Safety on the road is a responsibility we share.</h4>
              </div>
            </div>
          </div>
        </div>
    )
}