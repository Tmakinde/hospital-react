import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Appointment = (props) => {
    useEffect(() => {
        const getAppointments = () => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${props.token}`;
            axios.get('http://localhost:8001/api/patient/appointment').then(function(response){
                console.log(response.data);
                
            }).catch(function (error) {
                console.log(props.token);
                console.log(error);
            })
        }
        getAppointments()
    }, [])
    return (
        <div>
            <h1>Hello world</h1>
        </div>
    )
}

export default Appointment
