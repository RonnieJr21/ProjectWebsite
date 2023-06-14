import React from "react";

const ContactMe = () =>{



    return(
        <div>
            <h1>My information</h1>
            <p> Ronnie Huggins</p>
            <p>443 540 3460</p>
            <p>rjhj@protonmail.com</p>

            <form>
                <label>Your name:</label>
                <input type="text" name="" value=""/>
                <label>Your Email:</label>
                <input type="text" name="" value=""/>
                <label>Todays Date</label>
                <input type="date"/>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default ContactMe