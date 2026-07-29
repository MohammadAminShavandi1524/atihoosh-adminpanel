"use client";

import BlogsToolbar from "./BlogsToolbar";
import BlogsTable from "./BlogsTable";

interface Blog {
  id: string;
  title: string;
  category: string;
  tags: string[];
  date: string;
}

interface BlogsSectionProps {
  search: string;
  setSearch: (value: string) => void;
  sort: "newest" | "oldest";
  setSort: (value: "newest" | "oldest") => void;
  blogs: Blog[];
  onDelete: (blog: Blog) => void;
}

const BlogsSection = ({
  search,
  setSearch,
  sort,
  setSort,
  blogs,
  onDelete,
}: BlogsSectionProps) => {
  return (
    <section className="bg-secondary-bg relative flex h-full flex-col overflow-hidden rounded-xl">
      <BlogsToolbar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />

      <BlogsTable blogs={blogs} onDelete={onDelete} />
    </section>
  );
};

export default BlogsSection;
