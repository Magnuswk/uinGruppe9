import client from "./client"
export const createContact = async (name) => {
    try {
        await client.create({_type: "contact", name})
    } catch (error) {
        throw new Error(error)
    }
}