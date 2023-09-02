import type { RequestHandler } from "./$types";

import db from "$lib/database";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async (event) => {

    const posts = await db.post.findMany({
        take: Math.round(Math.random() * 30),
    });

    event.setHeaders({
        "Cache-Control": "max-age=0 s-max-age=60",
    });
    return json(posts);
};