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
