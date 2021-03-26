import React from "react";
import {useHistory} from 'react-router-dom'


export default function Home() {
    const history = useHistory();

    const routeToForm =() => {
        history.push('/pizza')
    }

    return (
        <div className='home-image'>
            {/* <img 
            className="home-image" 
            src ='https://images.pexels.com/photos/5792325/pexels-photo-5792325.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
            alt ='pizza pic' 
            /> */}
            <button onClick={routeToForm} className='orderBtn'> Order Now</button>
        </div>
    )
    
}