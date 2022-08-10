import axios from "axios"

export const getContries = async () => {
    return await axios.get('https://restcountries.com/v3.1/all')
}

export const getContry = async (countryName) => {
    return await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
}

