import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Announcement } from "@/types";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";
import Actions from "./Actions";

export const columns: ColumnDef<Announcement>[] = [
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
    cell: ({ row }) => {
      const title = row.original.title;
      return (
        <div className="font-medium">
          {title}
        </div>
      );
    },
  },

  {
    accessorKey: "content",
    header: "Content",
    cell: ({ row }) => {
      const content = row.original.content;
      const truncatedContent = content.length > 50 
        ? `${content.substring(0, 50)}...` 
        : content;
      
      return (
        <div className="max-w-xs">
          <p className="text-sm text-muted-foreground" title={content}>
            {truncatedContent}
          </p>
        </div>
      );
    },
  },

  {
    accessorKey: "is_active",
    header: "Status",
    cell: ({ row }) => {
      const isActive = row.original.is_active;
      
      return (
        <Badge 
          variant={isActive ? "default" : "secondary"}
          className="flex items-center gap-1 w-fit"
        >
          {isActive ? (
            <>
              <CheckCircle className="w-3 h-3" />
              Active
            </>
          ) : (
            <>
              <XCircle className="w-3 h-3" />
              Inactive
            </>
          )}
        </Badge>
      );
    },
  },

  {
    accessorKey: "created_at",
    header: "Created",
    cell: ({ row }) => {
      const createdAt = row.original.created_at;
      const date = new Date(createdAt);
      
      return (
        <div className="text-sm text-muted-foreground">
          {date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </div>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const announcement = row.original;
      return (
        <Actions announcement={announcement} />
      );
    },
  },
];