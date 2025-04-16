
function Sidebar(){
    return(
        <>
        <div className="w-64 bg-[#15151F] p-6">
         <h2 className=" text-xl font-bold mb-6"> Dashboard  </h2>
         <nav className="space-y-4">
          <a href="#" className="block hover:text-blue-400 border-bottom">My Bets</a>
          <a href="#" className="block hover:text-blue-400">Add Bet</a>
          <a href="#" className="block hover:text-blue-400">Stats</a>
          <a href="#" className="block hover:text-blue-400">Settings</a>
         </nav>
        </div>
        </>
    );
}

export default Sidebar;