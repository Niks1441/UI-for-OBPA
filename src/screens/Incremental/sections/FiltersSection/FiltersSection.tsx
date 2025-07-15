import React from "react";
import { Button } from "../../../../components/ui/button";

export const FiltersSection = (): JSX.Element => {
  // Data for filter buttons
  const filterOptions = [
    { id: 1, label: "Occassions and Packs Role", isActive: false },
    { id: 2, label: "Incremental Opportunities", isActive: true },
    { id: 3, label: "Strategy Execution", isActive: false },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-[31px] mt-24">
      <h1 className="font-extrabold text-black text-[28px] tracking-[0.40px] font-['Mulish',Helvetica] leading-normal">
        Incremental Opportunities
      </h1>

      <div className="flex items-center gap-5 w-full">
        {filterOptions.map((option) => (
          <Button
            key={option.id}
            variant="ghost"
            className={`px-[30px] py-[15px] rounded-[120px] ${
              option.isActive
                ? "bg-[#015ea5] text-white"
                : "bg-white text-black"
            }`}
          >
            <span className="font-['Mulish',Helvetica] font-bold text-base">
              {option.label}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};
