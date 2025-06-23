import { useGetActiveGiveaways } from "@/api/queries";
import Overview from "@/components/Dashboard/Giveaway/Overview";
import Participated from "@/components/Dashboard/Giveaway/Participated";
import type { Giveaway } from "@/types";
import React from "react";

const Giveaway: React.FC = () => {
  const { data } = useGetActiveGiveaways();
  console.log(data)
  return <div>{data?.participated ? <Participated data={data} /> : <Overview data={data as Giveaway} /> }</div>;
};

export default Giveaway;
