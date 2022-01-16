import React from 'react'
import Navbar from './Navigationbar'
import {navigate} from "@reach/router";

const Dashboard = (props) => {
    if (!props.token) {
        console.log("no token")
        //navigate('/');
    }
    else {
        console.log(props.token)
    }

    return (
        <>
            <Navbar />
            <div>
                <h1>This is dashboard</h1>
            </div>
        </>
    )
}

export default Dashboard
