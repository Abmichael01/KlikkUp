import React from "react";
import DataTable from "@/components/ui/data-table";
import { columns } from "./Column";
import { useGetGiveaways } from "@/api/queries";
import LoadingTableData from "../LoadingTableData";
import { Giveaway } from "@/types";

const Table: React.FC = () => {
  const { data, isLoading } = useGetGiveaways();

  if (isLoading) return <LoadingTableData />;

  return <DataTable columns={columns} data={data as Giveaway[]} />;
};

export default Table;