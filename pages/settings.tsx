import { User } from "@prisma/client";
import { getCookie } from "cookies-next";
import React, { useEffect } from "react";

export default function Settings() {
  const [token, setToken] = React.useState("");
  useEffect(() => {
    const token = getCookie("token");
    if (token !== undefined) setToken(token);
  }, []);
  return <main>{token ? <h1>Hello {token}</h1> : <h1>No user found</h1>}</main>;
}
