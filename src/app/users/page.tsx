// "use client";

// import Link from "next/link";
// import { ColumnDef } from "@tanstack/react-table";
// // import { DataTable } from "/data-table";
// import { DataTable } from "../payments/data-table";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// // ✅ Mock data
// type User = {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   status: string;
// };

// const mockUsers: User[] = Array.from({ length: 50 }, (_, i) => ({
//   id: `user-${i + 1}`,
//   name: `User ${i + 1}`,
//   email: `user${i + 1}@example.com`,
//   role: i % 3 === 0 ? "Admin" : "User",
//   status: i % 2 === 0 ? "Active" : "Inactive",
// }));

// // ✅ Define table columns
// const columns: ColumnDef<User>[] = [
//   {
//     accessorKey: "id",
//     header: "ID",
//     cell: ({ row }) => (
//       <Link href={`/users/${row.original.id}`} className="text-blue-600 hover:underline">
//         {row.original.id}
//       </Link>
//     ),
//   },
//   {
//     accessorKey: "name",
//     header: "Name",
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//   },
//   {
//     accessorKey: "role",
//     header: "Role",
//     cell: ({ row }) => (
//       <Badge variant={row.original.role === "Admin" ? "default" : "outline"}>
//         {row.original.role}
//       </Badge>
//     ),
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => (
//       <Badge
//         className={
//           row.original.status === "Active"
//             ? "bg-green-500 hover:bg-green-600"
//             : "bg-gray-400 hover:bg-gray-500"
//         }
//       >
//         {row.original.status}
//       </Badge>
//     ),
//   },
//   {
//     id: "actions",
//     header: "Actions",
//     cell: ({ row }) => (
//       <Link href={`/users/${row.original.id}`}>
//         <Button variant="outline" size="sm">
//           View
//         </Button>
//       </Link>
//     ),
//   },
// ];

// export default function UsersPage() {
//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold">Users</h1>
//       <p className="text-muted-foreground mb-4">
//         Manage and view all registered users.
//       </p>

//       <div className="bg-primary-foreground p-4 rounded-lg">
//         <DataTable columns={columns} data={mockUsers} />
//       </div>
//     </div>
//   );
// }




"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../payments/data-table"; // reuse your existing table
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// ✅ Define the User type
type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "User";
  status: "Active" | "Inactive";
};

// ✅ Generate mock data like the payments example
function getUsers(): User[] {
  const names = [
    "John Doe", "Jane Smith", "Mike Johnson", "Alice Brown", "Chris Lee",
    "Sophia Miller", "Daniel White", "Emma Davis", "David Clark", "Laura Wilson",
    "Olivia Taylor", "Ethan Harris", "Ava Martinez", "Noah Robinson",
    "Isabella Walker", "Liam Young", "Mia King", "Lucas Wright", "Amelia Scott"
  ];

  return Array.from({ length: 50 }, (_, i) => {
    const name = names[i % names.length];
    const email = `${name.toLowerCase().replace(/\s+/g, "")}@gmail.com`;

    return {
      id: `USER-${1000 + i}`,
      name,
      email,
      role: i % 4 === 0 ? "Admin" : "User",
      status: i % 3 === 0 ? "Inactive" : "Active",
    };
  });
}

// ✅ Define columns for DataTable
const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <Link
        href={`/users/${row.original.id}`}
        className="text-blue-600 hover:underline"
      >
        {row.original.id}
      </Link>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <Badge variant={row.original.role === "Admin" ? "default" : "outline"}>
        {row.original.role}
      </Badge>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        className={
          row.original.status === "Active"
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-400 hover:bg-gray-500"
        }
      >
        {row.original.status}
      </Badge>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <Link href={`/users/${row.original.id}`}>
        <Button variant="outline" size="sm">
          View
        </Button>
      </Link>
    ),
  },
];

// ✅ Page Component
export default function UsersPage() {
  const users = getUsers();

  return (
    <div className="px-6 py-4 space-y-4">
      <div className="mb-4 px-4 py-2 bg-secondary rounded-md">
        <h1 className="text-lg font-semibold">All Users</h1>
        <p className="text-sm text-muted-foreground">
          Manage and view all registered users.
        </p>
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <DataTable columns={columns} data={users} />
      </div>
    </div>
  );
}
