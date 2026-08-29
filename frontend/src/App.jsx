import DashboardPage from './dashboard/DashboardPage.jsx'
import Sidebar from './layout/Sidebar.jsx'
import Header from './layout/Header.jsx'

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <main>
        <DashboardPage />
      </main>
    </div >
  )
}

export default App
