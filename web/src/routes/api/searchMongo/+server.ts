import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({request}) => {
    console.log('request to search DB received')
    return json({success: 'searching'})
}