"use client";
import { createContext, useContext, useState, useEffect } from "react";

// ১. কনটেক্সট তৈরি
const ApiContext = createContext();

// ২. প্রোভাইডার ফাংশন
export function ApiProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGlobalData = async () => {
    try {
      setLoading(true);
      // আমরা আমাদের তৈরি করা লোকাল প্রক্সি এপিআই কল করছি
      const response = await fetch(process.env.PRIVATE_API_URL, {
        method: "GET",
        headers: {
          Accept: process.env.ACCEPT,
          "Api-key": process.env.API_KEY,
          "X-Signature": process.env.X_SIGNATURE,
          "Accept-Encoding": process.env.API_ENCODING,
        },
      });
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGlobalData();
  }, []);

  return (
    <ApiContext.Provider
      value={{ data, loading, error, refreshData: fetchGlobalData }}
    >
      {children}
    </ApiContext.Provider>
  );
}

// ৩. কাস্টম হুক (সহজে ব্যবহারের জন্য)
export const useApi = () => useContext(ApiContext);
