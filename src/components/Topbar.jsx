import { BellIcon } from "@heroicons/react/24/outline";

function Topbar() {
    return (
        <div className="bg-[#2A2A3B] p-4 flex justify-between items-center">
            <span className="text-lg font-semibold">Welcome, Melo</span>
            <div className="flex items-center gap-4">
                <BellIcon className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition duration-200" />
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full" />
        </div>
    );
}

export default Topbar;