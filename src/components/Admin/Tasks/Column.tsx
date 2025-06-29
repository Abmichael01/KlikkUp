import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@/types";
import { Link } from "react-router";
// import { cn } from "@/lib/utils";
import Actions from "./Actions";

export const columns: ColumnDef<Task>[] = [
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
    accessorKey: "title",
    header: "Title",
  },

  {
    accessorKey: "link",
    header: "Link",
    cell: ({ row }) => {
      const link = row.original.link;

      return (
        <Link to={link} className="hover:underline">
          Go to link
        </Link>
      );
    },
  },

  {
    accessorKey: "reward",
    header: "Reward",
  },

  {
    accessorKey: "confirmation_code",
    header: "Confirmation Code",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const task = row.original;
      // console.log("Task from row.original:", task); // Debugging
      return (
        <Actions task={task} />
      );
    },
  },
];
