import CryptoJS from "crypto-js";

export async function getHotels() {
  const apiKey = "1e8234c861f59b71091515efa946ed32";
  const secret = "4c2cf69797";
  const timestamp = Math.floor(Date.now() / 1000);

  const signature = CryptoJS.SHA256(apiKey + secret + timestamp).toString();
  console.log(signature);
  const response = await fetch(
    "https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels",

    {
      headers: {
        Accept: "application/json",
        "Api-key": apiKey,
        "X-Signature": signature,
      },
      cache: "no-store", // important for dynamic API
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch hotels");
  }

  return response.json();
}
