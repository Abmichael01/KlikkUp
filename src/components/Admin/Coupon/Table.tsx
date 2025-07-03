import React, { useState, useMemo } from 'react';
import DataTable from '@/components/ui/data-table';
import { columns } from './Column';
import { useGetCoupons } from '@/api/queries';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Coupon } from '@/types';

const Table: React.FC = () => {
  const { data = [] } = useGetCoupons();
  const [showSold, setShowSold] = useState(false);
  const [showUsed, setShowUsed] = useState(false);

  const filteredData: Coupon[] = useMemo(() => {
    return data.filter((coupon) => {
      if (showSold && showUsed) {
        // Filter by both sold and used
        return coupon.sold && coupon.used;
      }
      if (showSold) {
        // Sold but not necessarily used
        return coupon.sold && !coupon.used;
      }
      if (showUsed) {
        // Used but not sold
        return coupon.used && !coupon.sold;
      }
      return true; // No filters checked
    });
  }, [data, showSold, showUsed]);

  return (
    <div className="space-y-4 w-full">
      {/* Filter Checkboxes */}
      <div className="flex items-center gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="sold"
            checked={showSold}
            onCheckedChange={(checked) => setShowSold(Boolean(checked))}
          />
          <Label htmlFor="sold">Sold</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="used"
            checked={showUsed}
            onCheckedChange={(checked) => setShowUsed(Boolean(checked))}
          />
          <Label htmlFor="used">Used</Label>
        </div>
      </div>

      {/* DataTable */}
      <DataTable columns={columns} data={filteredData} searchableColId="code" />
    </div>
  );
};

export default Table;
