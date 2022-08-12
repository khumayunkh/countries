import axios from "axios"

export const getCountries = async () => {
    return await axios.get('https://restcountries.com/v3.1/all')
}

export const getCountry = async (countryName) => {
    return await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
}

