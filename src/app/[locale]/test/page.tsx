"use client";

import { useEffect, useState } from "react";

import HeaderLayout from "@/components/layout/HeaderLayout";

export default function TestPage() {
  const [rootBlogs, setRootBlogs] = useState<any[]>([]);
  console.log("🚀 ~ TestPage ~ rootBlogs:", rootBlogs)

  useEffect(() => {
    const fetchRootBlogs = async () => {
      try {
        const res = await fetch("/api/blog/root", {
          cache: "no-store",
        });

        const data = await res.json();

        console.log("Root Blogs:", data);

        setRootBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRootBlogs();
  }, []);

  return (
    <div className="flex min-h-screen flex-col gap-8 p-10">
      <HeaderLayout title="Root Blogs Test" descrption="" />

      <pre className="bg-secondary-bg overflow-auto rounded-xl p-6 text-sm">
        {JSON.stringify(rootBlogs, null, 2)}
      </pre>
    </div>
  );
}
