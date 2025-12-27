import React from "react";
import { getHotels } from "../../../actions/hotel";

const page = async () => {
  const data = await getHotels();
  console.log("data ------------>", data);

  return <div>{/* {data} */}</div>;
};

export default page;
