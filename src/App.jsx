import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import AddBets from './pages/AddBets.jsx'
import Dashboard from './pages/Dashboard.jsx'

function App() {


  return (
    <>
      <div className="flex min-h-screen bg-[#1E1E2F] text-white">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Topbar />
          <main className="p-6">
            <h1 className="text-3xl font-bold">Betting Dashboard</h1>
            <Dashboard/>
          </main>
          <div className="min-h-screen bg-[#1E1E2F] text-white">
              <AddBets />
            </div>
        </div>
      </div>
    </>
  )
}

export default App
