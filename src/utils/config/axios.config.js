import axios from 'axios';

//default config for axios

export default axios.create(
    {
        baseURL: "https://api.short.io/links",
        responseType: 'json',
        timeout: 6000,
        headers: {
            'Content-Type': 'application/json'
        } //important to set it depending of the api requirements, its not always neccesary
    }
)