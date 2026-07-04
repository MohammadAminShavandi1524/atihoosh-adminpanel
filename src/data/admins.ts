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

interface BlogRowProps {
  id: string;
  category: string;
  tags: string[];
  title: string;
  date: string;
}

export const blogs: BlogRowProps[] = [
  {
    id: "1",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Business"],
    title: "AI in 2026: Which Businesses Are Falling Behind the Competition?",
    date: "2026-07-01",
  },
  {
    id: "2",
    category: "Programming",
    tags: ["JavaScript", "TypeScript", "React"],
    title: "Modern JavaScript Patterns Every Developer Should Know",
    date: "2026-07-02",
  },
  {
    id: "3",
    category: "Web Development",
    tags: ["Next.js", "SSR", "Performance"],
    title: "Building High-Performance Web Applications with Next.js",
    date: "2026-07-03",
  },
  {
    id: "4",
    category: "Cyber Security",
    tags: ["Security", "Authentication", "Web"],
    title: "Top Web Security Mistakes Developers Still Make",
    date: "2026-07-04",
  },
  {
    id: "5",
    category: "Education",
    tags: ["Learning", "Career", "Programming"],
    title: "A Practical Roadmap to Becoming a Full-Stack Developer",
    date: "2026-07-05",
  },
  {
    id: "6",
    category: "Database",
    tags: ["MongoDB", "PostgreSQL", "Backend"],
    title: "Choosing the Right Database for Your Next Project",
    date: "2026-07-06",
  },
  {
    id: "7",
    category: "DevOps",
    tags: ["Docker", "CI/CD", "Automation"],
    title: "Docker and CI/CD: Streamlining Your Deployment Workflow",
    date: "2026-07-07",
  },
  {
    id: "8",
    category: "Cloud Computing",
    tags: ["AWS", "Cloud", "Deployment"],
    title: "Cloud Computing Trends That Will Shape the Future",
    date: "2026-07-08",
  },
  {
    id: "9",
    category: "Backend Development",
    tags: ["Node.js", "Express", "API"],
    title: "Building Secure and Scalable REST APIs with Node.js",
    date: "2026-07-09",
  },
  {
    id: "10",
    category: "UI/UX",
    tags: ["Figma", "Design", "Accessibility"],
    title: "Designing Interfaces That Users Love to Use",
    date: "2026-07-10",
  },
];
