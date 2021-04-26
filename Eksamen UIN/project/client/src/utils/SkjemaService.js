import client from "./client"

// Tjenester forms
export const createTjenester = async (data) => {
    try {
        await client.create({_type: "tjenester", ...data})
    } catch (error) {
        throw new Error(error)
    }
}
// Skjema for bilvrakingstjenester
export const createBilvraking = async (data) => {
    try {
        await client.create({_type: "bilvraking", ...data})
        console.log(data)
    } catch (error) {
        throw new Error(error)
    }
}
// Skjema for containerleie
export const createContainerleie = async (data) => {
    try {
        await client.create({_type: "containerleie", ...data})
    } catch (error) {
        throw new Error(error)
    }
}
// Skjema for henting
export const createHenting = async (data) => {
    try {
        await client.create({_type: "henting", ...data})
    } catch (error) {
        throw new Error(error)
    }
}
// Generelt kontakt oss skjema
export const createContact = async (data) => {
    try {
        await client.create({_type: "contact", ...data})
    } catch (error) {
        throw new Error(error)
    }
}