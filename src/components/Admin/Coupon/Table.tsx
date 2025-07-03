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
  const [showNew, setShowNew] = useState(false); // ✅ NEW filter

  const filteredData: Coupon[] = useMemo(() => {
    // No filters checked — show everything
    if (!showSold && !showUsed && !showNew) return data;

    return data.filter((coupon) => {
      const isSoldOnly = showSold && coupon.sold && !coupon.used;
      const isUsedOnly = showUsed && coupon.used && !coupon.sold;
      const isBoth = showSold && showUsed && coupon.sold && coupon.used;
      const isNew = showNew && !coupon.sold && !coupon.used;

      return isSoldOnly || isUsedOnly || isBoth || isNew;
    });
  }, [data, showSold, showUsed, showNew]);

  return (
    <div className="space-y-4 w-full">
      {/* Filter Checkboxes */}
      <div className="flex items-center gap-6">
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

        <div className="flex items-center space-x-2">
          <Checkbox
            id="new"
            checked={showNew}
            onCheckedChange={(checked) => setShowNew(Boolean(checked))}
          />
          <Label htmlFor="new">New</Label>
        </div>
      </div>

      {/* DataTable */}
      <DataTable columns={columns} data={filteredData} searchableColId="code" />
    </div>
  );
};

export default Table;
