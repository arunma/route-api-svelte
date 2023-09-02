import type { RequestHandler } from "@sveltejs/kit";

//api/newsletter GET
export const GET: RequestHandler = async (event) => {

    const options: ResponseInit = {
        status: 418,
        headers: {
            "X": "Gotcha!"
        }
    };

    return new Response("Hello", options);
}


//api/newsletter POST

export const POST: RequestHandler = async (event) => {

    const data = await event.request.formData();
    const email = data.get("email");

    console.log("email: ", email);

    return new Response(JSON.stringify({ success: true }), {
        headers: {
            "Content-Type": "application/json",
        }
    });

}