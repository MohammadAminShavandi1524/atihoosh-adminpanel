export type AdminRole =
  "Super Admin" | "Sales Admin" | "HR Admin" | "Content Writer";

export interface Admin {
  id: number;
  initials: string;
  name: string;
  role: AdminRole;
  email: string;
  permissions: {
    sales: boolean;
    team: boolean;
    chat: boolean;
    blog: boolean;
  };
}

export const admins: Admin[] = [
  {
    id: 1,
    initials: "SA",
    name: "Sohrab Ahmadi",
    role: "Super Admin",
    email: "super.admin@atihoosh.com",
    permissions: {
      sales: true,
      team: true,
      chat: true,
      blog: true,
    },
  },
  {
    id: 2,
    initials: "MR",
    name: "Maryam Rezaei",
    role: "Sales Admin",
    email: "sales.admin@atihoosh.com",
    permissions: {
      sales: true,
      team: false,
      chat: true,
      blog: false,
    },
  },
  {
    id: 3,
    initials: "AT",
    name: "Ali Taqavi",
    role: "HR Admin",
    email: "hr.admin@atihoosh.com",
    permissions: {
      sales: false,
      team: true,
      chat: true,
      blog: false,
    },
  },
  {
    id: 4,
    initials: "SK",
    name: "Sara Karimi",
    role: "Content Writer",
    email: "content.writer@atihoosh.com",
    permissions: {
      sales: false,
      team: false,
      chat: true,
      blog: true,
    },
  },
  {
    id: 4,
    initials: "SK",
    name: "Sara Karimi",
    role: "Content Writer",
    email: "content.writer@atihoosh.com",
    permissions: {
      sales: false,
      team: false,
      chat: true,
      blog: true,
    },
  },
  {
    id: 4,
    initials: "SK",
    name: "Sara Karimi",
    role: "Content Writer",
    email: "content.writer@atihoosh.com",
    permissions: {
      sales: false,
      team: false,
      chat: true,
      blog: true,
    },
  },
  {
    id: 4,
    initials: "SK",
    name: "Sara Karimi",
    role: "Content Writer",
    email: "content.writer@atihoosh.com",
    permissions: {
      sales: false,
      team: false,
      chat: true,
      blog: true,
    },
  },
  {
    id: 4,
    initials: "SK",
    name: "Sara Karimi",
    role: "Content Writer",
    email: "content.writer@atihoosh.com",
    permissions: {
      sales: false,
      team: false,
      chat: true,
      blog: true,
    },
  },
  {
    id: 4,
    initials: "SK",
    name: "Sara Karimi",
    role: "Content Writer",
    email: "content.writer@atihoosh.com",
    permissions: {
      sales: false,
      team: false,
      chat: true,
      blog: true,
    },
  },
  {
    id: 4,
    initials: "SK",
    name: "Sara Karimi",
    role: "Content Writer",
    email: "content.writer@atihoosh.com",
    permissions: {
      sales: false,
      team: false,
      chat: true,
      blog: true,
    },
  },
  {
    id: 4,
    initials: "SK",
    name: "Sara Karimi",
    role: "Content Writer",
    email: "content.writer@atihoosh.com",
    permissions: {
      sales: false,
      team: false,
      chat: true,
      blog: true,
    },
  },
];

export const tags = [
  {
    id: "1",
    label: "هوش مصنوعی",
  },
  {
    id: "2",
    label: "برنامه‌نویسی",
  },
  {
    id: "3",
    label: "طراحی وب",
  },
  {
    id: "4",
    label: "امنیت",
  },
  {
    id: "5",
    label: "آموزش",
  },
];

export const categories = [
  {
    id: "1",
    label: "Artificial Intelligence",
    date: "2026-07-01",
  },
  {
    id: "2",
    label: "Programming",
    date: "2026-07-02",
  },
  {
    id: "3",
    label: "Web Development",
    date: "2026-07-03",
  },
  {
    id: "4",
    label: "Cyber Security",
    date: "2026-07-04",
  },
  {
    id: "5",
    label: "Education",
    date: "2026-07-05",
  },
  {
    id: "6",
    label: "JavaScript",
    date: "2026-07-06",
  },
  {
    id: "7",
    label: "TypeScript",
    date: "2026-07-07",
  },
  {
    id: "8",
    label: "React",
    date: "2026-07-08",
  },
  {
    id: "9",
    label: "Next.js",
    date: "2026-07-09",
  },
  {
    id: "10",
    label: "Node.js",
    date: "2026-07-10",
  },
  {
    id: "11",
    label: "Tailwind CSS",
    date: "2026-07-11",
  },
  {
    id: "12",
    label: "UI/UX",
    date: "2026-07-12",
  },
  {
    id: "13",
    label: "Database",
    date: "2026-07-13",
  },
  {
    id: "14",
    label: "MongoDB",
    date: "2026-07-14",
  },
  {
    id: "15",
    label: "PostgreSQL",
    date: "2026-07-15",
  },
  {
    id: "16",
    label: "DevOps",
    date: "2026-07-16",
  },
  {
    id: "17",
    label: "Docker",
    date: "2026-07-17",
  },
  {
    id: "18",
    label: "Git",
    date: "2026-07-18",
  },
  {
    id: "19",
    label: "Cloud Computing",
    date: "2026-07-19",
  },
  {
    id: "20",
    label: "Backend Development",
    date: "2026-07-20",
  },
];

export interface ChildBlog {
  id: string;
  title: string;
  description: string;
}

export interface BlogRowProps {
  id: string;
  category: string;
  tags: string[];
  title: string;
  date: string;
  children: ChildBlog[];
}

export const blogs: BlogRowProps[] = [
  {
    id: "1",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Business"],
    title: "AI in 2026: Which Businesses Are Falling Behind the Competition?",
    date: "2026-07-01",
    children: [
      {
        id: "1-1",
        title: "How AI Is Transforming Small Businesses",
        description:
          "Discover how startups and small businesses are using artificial intelligence to automate daily operations and reduce costs.",
      },
      {
        id: "1-2",
        title: "The Future of AI-Powered Customer Support",
        description:
          "Learn how AI chatbots and virtual assistants are improving customer experience across industries.",
      },
      {
        id: "1-3",
        title: "Common AI Adoption Mistakes",
        description:
          "Explore the most frequent mistakes companies make when implementing AI solutions.",
      },
    ],
  },
  {
    id: "2",
    category: "Programming",
    tags: ["JavaScript", "TypeScript", "React"],
    title: "Modern JavaScript Patterns Every Developer Should Know",
    date: "2026-07-02",
    children: [
      {
        id: "2-1",
        title: "Understanding Closures",
        description:
          "A beginner-friendly explanation of closures and practical use cases.",
      },
      {
        id: "2-2",
        title: "Advanced TypeScript Utility Types",
        description:
          "Learn how utility types can simplify complex TypeScript projects.",
      },
    ],
  },
  {
    id: "3",
    category: "Web Development",
    tags: ["Next.js", "SSR", "Performance"],
    title: "Building High-Performance Web Applications with Next.js",
    date: "2026-07-03",
    children: [
      {
        id: "3-1",
        title: "Optimizing Server Components",
        description:
          "Techniques for improving performance with React Server Components.",
      },
      {
        id: "3-2",
        title: "Image Optimization in Next.js",
        description:
          "Reduce load times using the built-in Image component effectively.",
      },
    ],
  },

  // ...
];
