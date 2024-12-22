import { error } from '@sveltejs/kit';
import data from "$lib/server/data.json";

import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
    const requestedLocation = url.searchParams.get("location");

    const analysis = data.find(analysis => analysis.collectionName === requestedLocation);

    if (analysis === undefined) {
        error(400, "Location not found");
    }
    
	return Response.json(analysis);
};