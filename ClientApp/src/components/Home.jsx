import React from "react"
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
        </div>
    )
}