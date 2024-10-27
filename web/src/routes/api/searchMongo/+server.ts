import { json, type RequestHandler } from "@sveltejs/kit"
import { getClient } from "$lib/mongoconnect"

export const GET: RequestHandler = async ({ url }) => {
    // Extract data from search params
    const tagOriginal = url.searchParams.get('tag') || ''
    const tag = tagOriginal.replace("Tag", "")
    const searchString = url.searchParams.get('searchString') || ''
    const page: any = url.searchParams.get('page') || ''

    //sanitize search string
    let searchStringSanitized = (searchString.replace(/[^a-z0-9áéíóúñü_-\s\.,]/gim,"").trim())

    //collection = BizCards
    //Database = BizData

    const client: any = await getClient()

    const db = client.db('BizData')
    const collection = db.collection('BizCards')

    //determine what results to return based on the page number
    const resultsPerPage = 2
    const skip = (page -1) * resultsPerPage

    const query: any = {
        $text: { $search: searchStringSanitized }
      }
    
      if (tag.length >= 1) {
        query.tag = tag; // Add tag filter only if it's defined
      }


    const searchResults = await collection.find(query)
    .skip(skip)  // Skip the specified number of documents
    .limit(resultsPerPage)         // Limit the results to 12
    .toArray()
      

    






    return json({ searchResults: searchResults})
}