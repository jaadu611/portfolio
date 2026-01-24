"use client";

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

const SafariExtention = () => {
  return (
    <div className="flex items-center justify-between w-full transition-all duration-300 ease-in-out">
      <PanelLeft className="text-gray-400 size-4" />
      <div className="flex items-center gap-1 ml-5">
        <ChevronLeft className="text-gray-400 size-4" />
        <ChevronRight className="text-gray-400 size-4" />
      </div>

      <div className="flex-1 flex items-center justify-center gap-3">
        <ShieldHalf className="text-gray-400 size-4" />
        <div className="flex items-center justify-center gap-2 border border-gray-300 p-1 rounded-lg">
          <Search className="text-gray-400 size-4" />
          <input
            type="text"
            placeholder="Search or enter website name"
            className="flex-1"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Share className="text-gray-400 size-4" />
        <Plus className="text-gray-400 size-4" />
        <Copy className="text-gray-400 size-4" />
      </div>
    </div>
  );
};

export default SafariExtention;
