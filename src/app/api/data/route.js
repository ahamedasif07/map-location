import crypto from "crypto";

export async function GET() {
  const apiKey = process.env.API_KEY;
  const secret = process.env.HOTELBEDS_SECRET;
  const timestamp = Math.floor(Date.now() / 1000);

  const signature = crypto
    .createHash("sha256")
    .update(apiKey + secret + timestamp)
    .digest("hex");

  const response = await fetch(
    "https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels",
    {
      headers: {
        Accept: "application/json",
        "Api-key": apiKey,
        "X-Signature": signature,
      },
    }
  );

  const data = await response.json();
  return Response.json(data);
}
