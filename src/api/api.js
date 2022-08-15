import axios from "axios"

const client = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})

export const getCountries = async () => {
    return await client.get('/all')
}

export const getCountry = async (countryName) => {
    return await client.get(`/name/${countryName}`)
}

