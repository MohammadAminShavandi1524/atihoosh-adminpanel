"use client";

import GetNewArticle from "@/components/blogs/GetNewArticle";
import HeroSection from "@/components/blogs/HeroSection";
import LatestBlogs from "@/components/blogs/LatestBlogs";
import Stats from "@/components/blogs/Stats";

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <div className="headerPadding">
      <HeroSection />
      <LatestBlogs />
      <GetNewArticle />
    </div>
  );
};

export default page;
