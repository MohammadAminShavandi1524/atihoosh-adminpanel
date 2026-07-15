"use client";

import { useEffect } from "react";

export default function TestPage() {
  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await fetch("/api/resumes");

        const data = await response.json();

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResumes();
  }, []);

  return <div>Test</div>;
}
