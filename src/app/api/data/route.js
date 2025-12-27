export async function GET() {
  const apiKey = process.env.API_KEY;
  const secret = process.env.SECRET;
  const timestamp = Math.floor(Date.now() / 1000);
  const signatureString = apiKey + secret + timestamp;
  const signature = CryptoJS.SHA256(signatureString).toString();

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
