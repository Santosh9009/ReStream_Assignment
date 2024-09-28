import { Pen, Plus, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import ChatBubble from "./Dummychat";
import squild from '../../assets/squid.c45817fa20e672cc3f16.png';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="bg-[#071835] px-3 py-4 text-white md:h-[90vh] rounded-md h-full">
      <Tabs defaultValue="destinations" className="flex flex-col">
        <TabsList className="bg-transparent w-full flex justify-evenly ">
          <TabsTrigger
            className="bg-[#162B4D] text-center w-full bg-transparent data-[state=active]:text-white data-[state=active]:bg-[#162B4D] md:text-base p-3"
            value="destinations"
          >
            Destinations
          </TabsTrigger>
          <TabsTrigger
            className="w-full text-center  data-[state=active]:text-white data-[state=active]:bg-[#162B4D] md:text-base p-3"
            value="chat"
          >
            Chat
          </TabsTrigger>
        </TabsList>

        <TabsContent value="destinations" className="px-3 py-5 min-h-[50vh]">
          <div className="flex flex-wrap gap-3 justify-start items-center">
            <Button
              variant="default"
              className="flex justify-evenly items-center bg-blue-600 hover:bg-blue-700 font-semibold"
            >
              <Plus height={20} />
              Add Channel
            </Button>
            <Button
              variant="default"
              className="flex justify-evenly items-center  bg-transparent border-[0.1rem] border-slate-500 hover:bg-[#193259] font-semibold"
            >
              <Pen height={15} />
              Update Titles
            </Button>
          </div>

          <div className="flex justify-between items-center my-5">
            <p className="text-slate-200 text-sm">
              0 of 2 <span className="text-slate-400">active</span>{" "}
            </p>
            <p className="text-slate-500 cursor-pointer text-sm">
              Toggle all <span className="hover:text-white">OFF</span>
              <span> | </span>
              <span className="hover:text-white">ON</span>
            </p>
          </div>
          <div className="h-full flex flex-col gap-5 justify-center items-center overflow-hidden">
            <img className="w-20 h-20 md:w-40 md:h-40 mt-20" src={squild} alt="squid" />
            <Button
              variant="default"
              className="flex justify-evenly items-center bg-blue-600 hover:bg-blue-700 font-semibold"
            >
              <Plus height={20} />
              Add First Channel
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="chat" className="p-3 min-h-[50vh]">
          <div className="flex justify-end items-center w-full text-slate-400">
            <button className="flex justify-evenly items-center gap-2 overflow-hidden hover:bg-[#1f3d6e] rounded-md p-2">
              Chat Overlay
            </button>
            <button className="flex justify-evenly items-center gap-2 overflow-hidden hover:bg-[#1f3d6e] rounded-md p-2">
              <Settings />
              Settings
            </button>
          </div>

          <ChatBubble />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Sidebar;
