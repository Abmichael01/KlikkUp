import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Story } from "@/types";
// import { cn } from "@/lib/utils";
import Actions from "./Actions";

export const columns: ColumnDef<Story>[] = [
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
    accessorKey: "reward",
    header: "Reward",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const story = row.original;
      return (
        <Actions story={story} />
      );
    },
  },
];
