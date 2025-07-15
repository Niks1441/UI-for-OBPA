import React from "react";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { FiltersSection } from "./sections/FiltersSection";
import { OpportunitiesSection } from "./sections/OpportunitiesSection/OpportunitiesSection";

export const Incremental = (): JSX.Element => {
  return (
    <div className="bg-[#eaf6fb] flex flex-row justify-center w-full">
      <div className="bg-[#eaf6fb] w-full max-w-[1280px] relative">
        {/* Left sidebar */}
        <div className="fixed w-24 h-[617px] top-[53px] left-0">
          <img
            className="w-full h-full"
            alt="Navigation sidebar"
            src="/group-1000004454.png"
          />
        </div>

        {/* Top navigation bar */}
        <header className="fixed w-full max-w-[1280px] h-[70px] top-0 left-0 bg-white shadow-[0px_4px_4px_#00000040] flex items-center justify-between px-6 z-10">
          <div className="flex items-center">
            <img
              className="w-[68px] h-[58px]"
              alt="Revmlogo"
              src="/revmlogo-1.png"
            />
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="p-0 h-10 w-10">
              <img
                className="w-10 h-[38px]"
                alt="Notification icon"
                src="/notification-icon.svg"
              />
            </Button>

            <div className="flex items-center gap-2">
              <Avatar className="h-[35px] w-[38px] bg-[#08509a] rounded-[10px]">
                <AvatarFallback className="bg-[#08509a] text-white">
                  <div className="absolute w-[13px] h-[13px] top-0 left-[5px] bg-white rounded-[6.5px]" />
                  <div className="absolute w-[22px] h-[22px] top-3.5 left-0 bg-white rounded-[11px]" />
                </AvatarFallback>
              </Avatar>

              <div className="font-['Mulish',Helvetica] font-semibold text-[#08509a] text-[15px] tracking-[-0.15px]">
                User Name 1
              </div>

              <img
                className="w-[11px] h-1.5"
                alt="Dropdown arrow"
                src="/vector.svg"
              />
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="pt-[70px] pl-24 w-full">
          <FiltersSection />
          <OpportunitiesSection />
        </main>
      </div>
    </div>
  );
};
