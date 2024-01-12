"use client";
import { useState, useEffect, use } from "react";
import { getProviders, signIn } from "next-auth/react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
};

type Providers = Record<string, Provider>;

const AuthProvider = () => {
  const [providers, setProviders] = useState<Providers | null>(null);
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
      console.log(res);
    };
    fetchProviders();
  }, []);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider, index) => {
          return (
            <button key={index} onClick={() => signIn(provider.id)}>
              {provider.name}
            </button>
          );
        })}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default AuthProvider;
