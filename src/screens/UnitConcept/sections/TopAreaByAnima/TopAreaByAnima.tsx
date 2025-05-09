import { BellIcon, MessageSquareIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Input } from "../../../../components/ui/input";

export const TopAreaByAnima = (): JSX.Element => {
  return (
    <header className="flex h-12 items-center justify-between w-full">
      <div className="flex items-center gap-10">
        <div className="flex min-w-[150px] max-w-[423.5px] items-center gap-4">
          <img className="w-12 h-10" alt="Logo" src="./logo.svg" />
          <h1 className="font-typography-h6 font-[number:var(--typography-h6-font-weight)] text-[#000000de] text-[length:var(--typography-h6-font-size)] tracking-[var(--typography-h6-letter-spacing)] leading-[var(--typography-h6-line-height)]">
            CARE
          </h1>
        </div>

        <div className="flex w-[640px] h-12 items-center gap-2.5 p-2 bg-[#e5eaf2] rounded-xl">
          <SearchIcon className="w-6 h-6 text-black" />
          <Input
            className="border-0 bg-transparent h-8 p-0 placeholder:opacity-50 placeholder:font-typography-body1 placeholder:font-[number:var(--typography-body1-font-weight)] placeholder:text-black placeholder:text-[length:var(--typography-body1-font-size)] placeholder:tracking-[var(--typography-body1-letter-spacing)] placeholder:leading-[var(--typography-body1-line-height)] focus-visible:ring-0 focus-visible:ring-offset-0"
            type="text"
            placeholder="SearchIcon data reports"
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-4">
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center p-[5px] rounded-[100px] hover:bg-gray-100">
            <BellIcon className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center p-[5px] rounded-[100px] hover:bg-gray-100">
            <MessageSquareIcon className="w-5 h-5" />
          </button>
        </div>

        <Avatar className="w-8 h-8">
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
