"use client";

import { useEffect } from "react";

export default function TestPage() {
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("/api/users");

      const data = await response.json();

      console.log(data);
    };

    getUsers();
  }, []);

  return <div>Test</div>;
}