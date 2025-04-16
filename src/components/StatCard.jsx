
function StatCard({ title, icon, value }) {
    return (
        <div className="bg-[#2F2F40] p-4 rounded-lg flex items-center gap-4 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-md">
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-400">{title}</p>
                <p className="text-xl font-semibold">{value}</p>
            </div>

        </div>

    );
}

export default StatCard;