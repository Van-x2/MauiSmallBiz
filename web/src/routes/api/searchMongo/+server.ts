import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url }) => {
    // Extract data from search params
    const tag = url.searchParams.get('tag') || ''
    const searchString = url.searchParams.get('searchString') || ''
    console.log(`Tag:${tag} | Search:${searchString}`)

    






    return json({ success: 'searching', tag, searchString })
}