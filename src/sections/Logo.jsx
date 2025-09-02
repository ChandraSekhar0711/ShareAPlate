"use client";

import { Heart } from "lucide-react";

export default function Logo() {
  return (
    <div className="relative">
      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center transition-transform hover:scale-105">
        <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
          <div className="w-4 h-1 bg-amber-400 rounded-full"></div>
        </div>
      </div>
      <Heart className="w-4 h-4 text-orange-400 absolute -top-1 -right-1 fill-current" />
    </div>
  );
}
