//This file handles Axios' RESTFUL API

import axios from 'axios'

//create a single axios instance for the entire application
const apiClient = axios.create({
    baseURL: 'http://localhost:3000', //base calls for all ursl to use
    withCredentials: false,
    headers: {
        //for authentication & configuration
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }

})

export default{
    getEvents(){
        return apiClient.get('/events')
    }
}