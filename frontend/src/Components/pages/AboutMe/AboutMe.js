import React from "react";
import './AboutMe.css'

const AboutMe = () => {
    return(
        <div className={'about-me'}>
            <div className="Arsiem">
                    <h2 className="Arsiem-Position"><a className="Arsiem-Position"> Software Engineering intern </a>
                    </h2>
                    <h3 className="Arsiem-Time">August 2022 - Present</h3>
                    <p className="Arsiem-work">
                        I am currently a software engineering intern at Arsiem corporation. In this internship I
                        have used React.js to modify our front end and build responsive and appealing
                        front end components to aid the users in navigating and using the features we have
                        built. I also have been the primary backend engineer along with working on the frontend.
                        We started off using Flask for our backend, and we had no database connected
                        to our web application, so I decided to change that! I rewrote the backend in Javascript, using
                        Node.js and Express.js and connected everything together using MongoDB. Since then, I have been
                        working on our api and have added user account management, such as creating and deleting,
                        storing and
                        updating in the database. We wanted our application to be secure so each user's account
                        information stored in our database
                        is encrypted, and every user receives JSON web-tokens for the continuous authentication I built
                        into our app. </p>
                </div>

                <hr size="2" noshade=""/>

                <div className="USAF">

                    <h2 className="USAF-Position"><a className="USAF-Position-Link" href="https://www.airforce.com/careers/detail/tactical-aircraft-maintenance"> Tactical
                        Aircraft Maintenance - 2A353E </a></h2>
                    <h3 className="USAF-Time">March 2018 - Present</h3>
                    <p className="USAF-work">
                        I enlisted into the Maryland Air National Guard one month after I turned 18, I was still in high
                        school, I knew I wanted to be a part
                        of something bigger than myself and make an impact in the world. I went to Air force BMT on
                        August 28th 2018 and there I learned
                        a lot about myself and was able some of the closest friendships I could imagine. I put
                        everything I could into being the best Airman I could be
                        and on graduation day I found out that I was the top graduate of my class of 743 other trainees.
                        Nothing in this world will ever
                        beat the feeling earning my Airman's coin and officially earning the title of Airman. My
                        military career has taken
                        me to places I never thought I would ever go. I am an Airforce Mechanic and I work on the A-10C
                        Thunderbolt 2 aka the "Warthog"
                        I have been to two airshows, Wisconsin, and Key West all training experience and allowed me to
                        meet new people and see
                        aspects of life I didn't think of before. But, there was a reason I joined the Guard and not
                        Active Duty. I wanted to serve my community,
                        my state, Maryland! I have had the Honor of being able to help the citizens of my state during
                        2021 and 2022 due to covid. I
                        was on one of the biggest Covid-19 Vaccination stations in Maryland where we administered over
                        250 Thousand vaccines! I also was
                        called to service again in 2022 With the spike in covid cases I was sent to a testing station
                        where I could help the people coming
                        in know that they will have answers soon and whether they had covid or not. I can not begin to
                        imagine
                        my life had I not joined I have made some of the best friends and memories because of it and I
                        cant wait to see where the Guard takes me!
                    </p>
                </div>
        </div>
        )
}
export default AboutMe