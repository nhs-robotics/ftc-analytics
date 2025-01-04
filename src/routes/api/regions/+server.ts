import { error } from '@sveltejs/kit';
import data from "$lib/server/data.json";

import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {

    const regions = data.map(region => ({ collectionName: region.collectionName, averagePreFoulTotal: region.averagePreFoulTotal, averagePreFoulTotalOverTime: region.averagePreFoulTotalOverTime, distribution: region.distribution}));
    
	return Response.json(regions);
};