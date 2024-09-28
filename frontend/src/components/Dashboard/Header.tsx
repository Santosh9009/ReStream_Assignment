// src/components/Header.tsx

import { ArrowUpCircle, ChevronLeft } from "lucide-react";
import DropMenu from "./DropMenu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between py-3 bg-transparent text-white px-4">
      <div className="flex gap-4 justify-center items-center">
        <button onClick={()=>navigate('/')} className="bg-[#224174] p-2 rounded-md">
          <ChevronLeft className="hover:opacity-75" />
        </button>
        <p className="md:text-xl font-medium">Encoder</p>
        <button className="hidden relative md:inline-flex h-10 overflow-hidden rounded-md p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-0 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#91ECEF_0%,#B29BFF_50%,#91ECEF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-[#162B4D] px-3 py-1 text-sm font-medium backdrop-blur-3xl text-[#91ECEF]">
            <p className="flex gap-2 justify-evenly items-center text-sm">
              {" "}
              Upgrade
              <ArrowUpCircle />
            </p>
          </span>
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <DropMenu />
      </div>
    </header>
  );
};

export default Header;
