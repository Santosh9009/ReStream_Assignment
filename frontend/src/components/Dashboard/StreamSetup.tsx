import { Pen, Settings } from "lucide-react";
import { Button } from "../ui/button";
import RestreamButton from "./Button";

const StreamSetup = () => {
  return (
    <>
      <div className="relative bg-black p-6 rounded-lg shadow-lg pt-20 overflow-hidden">
        <div className="block">
          <div className="absolute right-8 top-5">
            <RestreamButton />
          </div>
          <div className="max-w-md mx-auto">
            <h2 className="text-xl md:text-3xl font-medium text-center mb-2 text-slate-00">
              Set Up Your Livestream
            </h2>
            <p className="text-sm text-center mb-6 text-slate-400">
              Copy and paste the RTMP settings into your streaming software.
            </p>

            <div className="mt-4">
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-400">
                  RTMP URL:
                </label>
                <div className="flex items-center mt-2">
                  <input
                    placeholder="rtmp://live.restream.io/live"
                    className="bg-gray-800 text-white p-3 rounded-l-md flex-1 focus:border-none"
                  />
                  <Button
                    variant="secondary"
                    className="ml-2 bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Copy
                  </Button>
                </div>
              </div>

              <div className="mb-20">
                <label className="block text-sm font-semibold text-slate-400">
                  Stream Key:
                </label>
                <div className="flex items-center mt-2">
                  <input
                    placeholder="************************"
                    className="bg-gray-800 text-white p-3 rounded-l-md flex-1"
                  />
                  <Button
                    variant="secondary"
                    className="ml-2 bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Copy
                  </Button>
                </div>
                <div className="text-blue-500 mt-2 hover:underline inline-block text-center text-sm">
                  Add backup stream
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <p className="text-lg text-blue-500">
                Explore how to connect OBS, Zoom, vMix
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-slate-300 flex flex-wrap justify-evenly my-2 px-2">
        <h6 className="flex justify-center items-center gap-1 hover:text-slate-100 md:text-lg">
          Go live from your browser with Restream Studio
          <button className="border-2 rounded-md md:rounded-full border-slate-500 hover:bg-[#1f3d6e] px-2 py-1 text-xs text-slate-300">
            Music & Art
          </button>
          <Pen height={15} />
        </h6>
        <button className="flex justify-evenly items-center gap-2 overflow-hidden hover:bg-[#1f3d6e] rounded-md p-2">
          Embedded Stream
        </button>
        <button className="flex justify-evenly items-center gap-2 overflow-hidden hover:bg-[#1f3d6e] rounded-md p-2">
          <Settings />
          Stream settings
        </button>
      </div>
    </>
  );
};

export default StreamSetup;
