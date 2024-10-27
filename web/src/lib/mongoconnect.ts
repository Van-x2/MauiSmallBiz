import { MongoClient } from "mongodb"
import { MONGO_STRING } from "$env/static/private"

let client: any | null = null

export async function connectToDatabase() {
    if (client && client.topology?.isConnected()) {
        console.log('connected to MongoDB on existing connection')
        return client
    }
    console.log('starting new connection to mongo')
    try {
        client = new MongoClient(MONGO_STRING)
        await client.connect()
        // Test the connection
        await client.db("admin").command({ ping: 1 })
        console.log("Connected successfully to MongoDB")
        return client
    } catch (error) {
        console.error("Connection error:", error)
        throw error
    }
}

export async function getClient() {
    if (!client) {
        return connectToDatabase()
    }
    return client
}

export async function closeDatabase() {
    if(client) {
        await client.close()
        client = null
        console.log('Disconnected from MongoDB')
    }
}