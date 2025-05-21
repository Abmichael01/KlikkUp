import Table from "@/components/Admin/Coupon/Table";
import GlidingButton from "@/components/ui/GlidingButton";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import GenerateCoupon from "@/components/Admin/Coupon/GenerateCoupon";

const Coupon: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start gap-5 justify-between sm:items-center">
        <h1 className="text-xl md:text-3xl font-semibold fancy-font">Coupon Management</h1>

        <Dialog>
          <DialogTrigger>
            <GlidingButton className="text-sm px-5">
              Generate Coupon(s)
            </GlidingButton>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Generate Coupon(s)</DialogTitle>
            </DialogHeader>
            <GenerateCoupon />
          </DialogContent>
        </Dialog>
      </div>
      <Table />
    </div>
  );
};

export default Coupon;
