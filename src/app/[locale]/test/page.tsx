"use client";

import { useEffect, useState } from "react";

import HeaderLayout from "@/components/layout/HeaderLayout";

export default function TestPage() {
  const [childBlogs, setChildBlogs] = useState<any[]>([]);
  console.log("🚀 ~ TestPage ~ childBlogs:", childBlogs);

  useEffect(() => {
    const fetchChildBlogs = async () => {
      try {
        // فعلا یه parent id واقعی که داری بزار
        const parentId = 1;

        const res = await fetch(`/api/blog/child/${parentId}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch child blogs");
        }

        const data = await res.json();

        console.log("Child Blogs:", data);

        setChildBlogs(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChildBlogs();
  }, []);

  return (
    <div className="flex min-h-screen flex-col gap-8 p-10">
      <HeaderLayout
        title="Child Blogs Test"
        descrption=""
      />

      <pre className="bg-secondary-bg overflow-auto rounded-xl p-6 text-sm">
        {JSON.stringify(childBlogs, null, 2)}
      </pre>
    </div>
  );
}