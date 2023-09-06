import axios from "axios";
import { OpenAPI } from "./core/OpenAPI";

interface QueryParams {
  method: string;
  url: string;
  bodyData?: {};
  token?: string | any;
}

export default async function query({
  method,
  url,
  bodyData,
  token = "",
}: QueryParams) {
  let headers1 = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token, //`Bearer ${token}`
  };
  let headers2 = {
    "Content-Type": "application/json",
  };
  const conditionalHeader = token ? headers1 : headers2;

  // console.log("Your Test token is " + token)

  try {
    if (method == "GET") {
      var response = await fetch(`${OpenAPI.BASE}${url}`, {
        headers: conditionalHeader,
        method,
      });
    } else {
      var response = await fetch(`${OpenAPI.BASE}${url}`, {
        method,
        headers: conditionalHeader,
        body: JSON.stringify(bodyData),
      });
    }

    const data = await response.json();
    if (data.status) {
      return { success: true, data: data };
    } else {
      return { success: false, data: data };
    }
  } catch (err) {
    return { success: false, error: err };
  }
}
