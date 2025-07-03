import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { User } from "@/types";
import { Link } from "react-router";
// import { cn } from "@/lib/utils";
import Actions from "./Actions";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "username",
    header: "Username",
  },

  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const email = row.original.email; 

      return (
        <Link to={`mailto:${email}`} className="hover:underline">
          {email}
        </Link>
      );
    },
  },

  {
    accessorKey: "points",
    header: "Points",
    cell: ({ row }) => {
      const points = row.original?.point_balance;

      return (
        <span>
          {points}
        </span>
      );
    },
  },  
  {
    accessorKey: "status",
    header: "Status",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      console.log(user)
      return (
        <Actions user={user} />
      );
    },
  },
];
