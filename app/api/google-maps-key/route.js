export async function GET() {
    const key = process.env.GOOGLE_MAPS_API_KEY;

    if (!key) {
        console.error("GOOGLE_MAPS_API_KEY is not configured");
        return Response.json({ error: "API key not configured" }, { status: 500 });
    }

    return Response.json({ apiKey: key });
}
