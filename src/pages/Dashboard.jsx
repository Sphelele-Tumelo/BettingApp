import StatCard from "../components/StatCard.jsx";
import {BanknotesIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon, ChartBarIcon} from "@heroicons/react/24/outline";

function Dashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Bets" value="R1 200" icon={<BanknotesIcon className="w-6 h-6" />} />
            <StatCard title="Winnings" value="R950" icon={<ArrowTrendingUpIcon className="w-6 h-6" />} />
            <StatCard title="Losses" value="R250" icon={<ArrowTrendingDownIcon className="w-6 h-6" />} />
            <StatCard title="Profit" value="R700" icon={<ChartBarIcon className="w-6 h-6" />} />
        </div>

    );
}

export default Dashboard;