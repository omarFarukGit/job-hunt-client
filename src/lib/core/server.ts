"use server";

import { getUserToken } from "./session";

export const serverMutaion = async (path: string, data: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const authHeader=async()=>{
  const token= await getUserToken();
  const header={
    authorization :`Bearer ${token}`
  }

  return token ? header:{}
}
